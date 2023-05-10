import { __rest } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import '../Box/index.js';
import '../Legend/index.js';
import { Bar } from './Bar.js';
import { Circle } from './Circle.js';
import { useKind, useBounds } from './utils.js';
import { Box } from '../Box/Box.js';
import { Legend } from '../Legend/Legend.js';

const Meter = forwardRef((_a, ref) => {
    var { background = "contrast", direction = "horizontal", id, kind: kindProp, legend, max, min, pattern, round, size = "medium", thickness = "medium", type = "bar", value, values: valuesProp } = _a, rest = __rest(_a, ["background", "direction", "id", "kind", "legend", "max", "min", "pattern", "round", "size", "thickness", "type", "value", "values"]);
    // normalize kind
    const kind = useKind(kindProp, valuesProp);
    // normalize values to an array of objects
    const values = useMemo(() => {
        if (valuesProp)
            return valuesProp;
        if (value)
            return [{ value }];
        return [];
    }, [value, valuesProp]);
    const bounds = useBounds(kind, max, min, values);
    let content = null;
    if (type === "bar") {
        content = (jsx(Bar, Object.assign({ ref: ref, background: background, id: id, kind: kind, pattern: pattern, bounds: bounds, round: round, values: values, size: size, thickness: thickness, direction: direction }, rest)));
    }
    else if (type === "circle" || type === "pie" || type === "semicircle") {
        content = (jsx(Circle, Object.assign({ ref: ref, background: background, id: id, kind: kind, pattern: pattern, bounds: bounds, round: round, values: values, size: size, thickness: thickness, type: type }, rest)));
    }
    if (legend) {
        content = (jsxs(Box, Object.assign({ direction: "row", wrap: true, gap: "medium", align: "center", flex: false }, { children: [content, jsx(Legend, { id: id ? `${id}-legend` : undefined, kind: kind, max: max, min: min, values: values })] })));
    }
    return content;
});
Meter.displayName = "Meter";

export { Meter };
