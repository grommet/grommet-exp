import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useMemo } from 'react';
import { Bar } from './Bar.js';
import { Circle } from './Circle.js';
import { useKind, useBounds } from './utils.js';

const Meter = forwardRef((_a, ref) => {
    var { background = "contrast", direction = "horizontal", id, kind: kindProp, max: maxProp, min: minProp, pattern, round, size = "medium", thickness = "medium", type = "bar", value, values: valuesProp } = _a, rest = __rest(_a, ["background", "direction", "id", "kind", "max", "min", "pattern", "round", "size", "thickness", "type", "value", "values"]);
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
    const bounds = useBounds(kind, maxProp, minProp, values);
    let content = null;
    if (type === "bar") {
        content = (jsx(Bar, Object.assign({ ref: ref, background: background, id: id, kind: kind, pattern: pattern, bounds: bounds, round: round, values: values, size: size, thickness: thickness, direction: direction }, rest)));
    }
    else if (type === "circle" || type === "pie" || type === "semicircle") {
        content = (jsx(Circle, Object.assign({ ref: ref, background: background, id: id, kind: kind, pattern: pattern, bounds: bounds, round: round, values: values, size: size, thickness: thickness, type: type }, rest)));
    }
    return content;
});
Meter.displayName = "Meter";

export { Meter };
