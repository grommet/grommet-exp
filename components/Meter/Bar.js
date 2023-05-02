import { __rest } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { structuredTokens } from 'hpe-design-tokens';
import { valueColor, valuePattern, backgroundColor } from './utils.js';

const Bar = forwardRef((_a, ref // doesn't work with <svg />?
) => {
    var { background, bounds, direction, id, kind, pattern: patternProp, round, size = "medium", thickness: thicknessProp = "medium", type, // ignored
    values } = _a, rest = __rest(_a, ["background", "bounds", "direction", "id", "kind", "pattern", "round", "size", "thickness", "type", "values"]);
    const length = useMemo(() => {
        if (size === "full")
            return 288;
        return parseInt(structuredTokens.content[size] || size, 10);
    }, [size]);
    const thickness = parseInt(structuredTokens.spacing[thicknessProp].desktop, 10);
    // account for the round cap, if any
    const capOffset = round ? thickness / 2 : 0;
    const mid = thickness / 2;
    const someHighlight = (values || []).some((v) => v.highlight);
    let start = direction === "horizontal"
        ? capOffset
        : (bounds.pathMax * (length - 2 * capOffset)) / bounds.pathMax;
    const patterns = [];
    const paths = (values || [])
        .reduce((acc, valueArg, index) => {
        const pathValue = typeof valueArg.value === "number"
            ? valueArg.value
            : valueArg.value[0];
        const colorValue = typeof valueArg.value === "number"
            ? valueArg.value
            : valueArg.value[1];
        if (pathValue > 0) {
            const { highlight, label, onHover, pattern: patternName, value } = valueArg, pathRest = __rest(valueArg, ["highlight", "label", "onHover", "pattern", "value"]);
            const key = `p-${index}`;
            const delta = (pathValue * (length - 2 * capOffset)) / bounds.pathMax;
            const d = direction === "horizontal"
                ? `M ${start},${mid} L ${start + delta},${mid}`
                : `M ${mid},${start} L ${mid},${start - delta}`;
            const stroke = valueColor({
                kind,
                bounds,
                value: colorValue,
                index,
            });
            let hoverProps;
            if (onHover) {
                hoverProps = {
                    onMouseOver: () => onHover(true),
                    onMouseLeave: () => onHover(false),
                };
            }
            if (direction === "horizontal") {
                start += delta;
            }
            else {
                start -= delta;
            }
            let patternId;
            let pattern;
            if (patternName || patternProp)
                [patternId, pattern] = valuePattern(id || "meter", patternName || patternProp, stroke);
            if (pattern)
                patterns.push(pattern);
            const result = (jsx("path", Object.assign({ d: d, fill: "none", stroke: patternId ||
                    (someHighlight && !highlight && background) ||
                    stroke, strokeWidth: direction === "horizontal" ? thickness : length, strokeLinecap: round ? "round" : "butt" }, hoverProps, pathRest), key));
            acc.push(result);
        }
        return acc;
    }, [])
        .reverse(); // reverse so the caps looks right
    let width;
    if (direction === "horizontal") {
        width = size === "full" ? "100%" : length;
    }
    else {
        width = size === "full" ? "100%" : thickness;
    }
    const backgroundPath = direction === "horizontal"
        ? `M ${capOffset},${mid} L ${length - capOffset},${mid}`
        : `M ${mid},${capOffset} L ${mid},${length - capOffset}`;
    return (jsxs("svg", Object.assign({ viewBox: direction === "horizontal"
            ? `0 0 ${length} ${thickness}`
            : `0 0 ${thickness} ${length}`, preserveAspectRatio: "none", width: width, height: direction === "horizontal" ? thickness : length }, rest, { children: [patterns.length && jsx("defs", { children: patterns }), jsx("path", { d: backgroundPath, fill: "none", stroke: backgroundColor(background), strokeWidth: thickness, strokeLinecap: round ? "round" : "square" }), paths] })));
});
Bar.displayName = "Bar";

export { Bar };
