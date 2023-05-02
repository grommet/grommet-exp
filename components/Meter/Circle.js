import { __rest } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { structuredTokens } from 'hpe-design-tokens';
import { valueColor, translateEndAngle, strokePattern, arcCommands, backgroundColor } from './utils.js';

const Circle = forwardRef((_a, ref) => {
    var { background, bounds, direction, // ignored
    id, kind, pattern: patternProp, round, size = "medium", thickness: thicknessProp = "medium", type, values } = _a, rest = __rest(_a, ["background", "bounds", "direction", "id", "kind", "pattern", "round", "size", "thickness", "type", "values"]);
    const width = useMemo(() => {
        if (size === "full")
            return 288;
        return parseInt(structuredTokens.content[size] || size, 10);
    }, [size]);
    const strokeWidth = type === "pie"
        ? width / 2
        : parseInt(structuredTokens.spacing[thicknessProp].desktop, 10);
    const centerX = width / 2;
    const centerY = width / 2;
    const radius = width / 2 - strokeWidth / 2;
    // truncate to avoid floating point arithmetic errors
    // see: https://github.com/grommet/grommet/issues/6190
    // Choose a scale factor at least 3 orders of magnitude above max
    const scalePower = Math.max(5, Math.ceil(Math.log10(bounds.pathMax)) + 3);
    const scale = Math.pow(10, scalePower);
    const anglePer = Math.floor(((type === "semicircle" ? 180 : 360) / bounds.pathMax) * scale) / scale;
    //  (type === 'semicircle' ? 180 : 360) / max;
    const someHighlight = (values || []).some((v) => v.highlight);
    let startValue = 0;
    let startAngle = type === "semicircle" ? 270 : 0;
    const paths = [];
    let pathCaps = [];
    const patterns = [];
    (values || []).forEach((valueArg, index) => {
        const pathValue = typeof valueArg.value === "number" ? valueArg.value : valueArg.value[0];
        const colorValue = typeof valueArg.value === "number" ? valueArg.value : valueArg.value[1];
        if (pathValue > 0) {
            const { highlight, label, onHover, pattern: patternName, value } = valueArg, pathRest = __rest(valueArg, ["highlight", "label", "onHover", "pattern", "value"]);
            const key = `p-${index}`;
            const stroke = valueColor({
                kind,
                bounds,
                value: colorValue,
                index,
            });
            let endAngle;
            if (startValue + pathValue >= bounds.pathMax) {
                endAngle = type === "semicircle" ? 90 : 360;
            }
            else {
                endAngle = translateEndAngle(startAngle, anglePer, pathValue);
            }
            let hoverProps;
            if (onHover) {
                hoverProps = {
                    onMouseOver: () => onHover(true),
                    onMouseLeave: () => onHover(false),
                };
            }
            let patternId;
            let pattern;
            if (patternName || patternProp)
                [patternId, pattern] = strokePattern(id || "meter", patternName || patternProp, stroke);
            if (pattern)
                patterns.push(pattern);
            if (round) {
                const d1 = arcCommands(centerX, centerY, radius, startAngle, endAngle);
                paths.unshift(jsx("path", Object.assign({ d: d1, fill: "none", stroke: patternId ||
                        (someHighlight && !highlight && background) ||
                        stroke, strokeWidth: strokeWidth, strokeLinecap: "round" }, hoverProps, pathRest), key));
                // To handle situations where the last values are small, redraw
                // a dot at the end. Give just a bit of angle to avoid anti-aliasing
                // leakage around the edge.
                const d2 = arcCommands(centerX, centerY, radius, endAngle - 0.5, endAngle);
                const pathCap = (jsx("path", Object.assign({ d: d2, fill: "none", stroke: patternId ||
                        (someHighlight && !highlight && background) ||
                        stroke, strokeWidth: strokeWidth, strokeLinecap: "round" }, hoverProps, pathRest), `${key}-`));
                // If we are on a large enough path to not need re-drawing previous
                // ones, clear the pathCaps we've collected already.
                if (endAngle - startAngle > 2 * anglePer) {
                    pathCaps = [];
                }
                pathCaps.unshift(pathCap);
            }
            else {
                const d = arcCommands(centerX, centerY, radius, startAngle, endAngle);
                paths.push(jsx("path", Object.assign({ d: d, fill: "none", stroke: patternId ||
                        (someHighlight && !highlight && background) ||
                        stroke, strokeWidth: strokeWidth, strokeLinecap: "butt" }, hoverProps, pathRest), key));
            }
            startValue += pathValue;
            startAngle = endAngle;
        }
    });
    let track;
    if (type === "semicircle") {
        const d1 = arcCommands(centerX, centerY, radius, 270, 90);
        track = (jsx("path", { d: d1, strokeWidth: strokeWidth, fill: "none", stroke: backgroundColor(background), strokeLinecap: round ? "round" : "square" }));
    }
    else {
        track = (jsx("circle", { cx: centerX, cy: centerY, r: radius, stroke: backgroundColor(background), strokeWidth: strokeWidth, strokeLinecap: round ? "round" : "square", fill: "none" }));
    }
    const viewBoxHeight = type === "semicircle" ? width / 2 : width;
    return (jsxs("svg", Object.assign({ viewBox: `0 0 ${width} ${viewBoxHeight}`, width: size === "full" ? "100%" : width, height: size === "full" ? "100%" : viewBoxHeight }, rest, { children: [patterns.length && jsx("defs", { children: patterns }), track, paths, pathCaps] })));
});
Circle.displayName = "Circle";

export { Circle };
