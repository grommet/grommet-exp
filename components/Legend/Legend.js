import { __rest } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { legendContainer, legend, legendSwatch } from 'grommet-exp-theme';
import '../Box/index.js';
import '../Meter/index.js';
import { useKind, useBounds, valueColor, valuePattern } from '../Meter/utils.js';
import { Box } from '../Box/Box.js';

const Legend = forwardRef((_a, ref) => {
    var { id, kind: kindProp, max, min, values } = _a, rest = __rest(_a, ["id", "kind", "max", "min", "values"]);
    const kind = useKind(kindProp, values);
    const bounds = useBounds(kind, max, min, values);
    return (jsx(Box, Object.assign({ ref: ref, className: legendContainer, id: id, flex: "grow" }, rest, { children: jsx(Box, Object.assign({ className: legend, flex: false }, { children: values.map((valueArg, index) => {
                const { label, pattern: patternName } = valueArg;
                const colorValue = typeof valueArg.value === "number"
                    ? valueArg.value
                    : valueArg.value[1];
                const fill = valueColor({
                    kind,
                    bounds,
                    value: colorValue,
                    index,
                });
                let patternId;
                let pattern;
                if (patternName)
                    [patternId, pattern] = valuePattern(id || "legend", patternName, fill);
                return (jsxs(Box, Object.assign({ direction: "row", gap: "small", align: "center" }, { children: [jsxs("svg", Object.assign({ className: legendSwatch, viewBox: "0 0 24 24", width: 24, height: 24 }, { children: [pattern && jsx("defs", { children: pattern }), jsx("rect", { x: 0, y: 0, width: 24, height: 24, fill: patternId || fill })] })), label] }), label));
            }) })) })));
});
Legend.displayName = "Legend";

export { Legend };
