import { jsxs, jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { structuredTokens } from 'hpe-design-tokens';

const useKind = (kind, values) => {
    return useMemo(() => {
        if (kind)
            return kind;
        if (!values)
            return "single";
        const firstValue = values[0];
        if (firstValue && Array.isArray(firstValue.value))
            return "sequential";
        return "qualitative";
    }, [kind, values]);
};
const calculateBounds = (values) => {
    const result = { pathMax: 0, pathMin: 0, colorMax: 0, colorMin: 0 };
    if (values && values[0] && Array.isArray(values[0].value)) {
        values.forEach((value) => {
            const [pVal] = value.value;
            if (pVal < 0)
                result.pathMin += pVal;
            if (pVal > 0)
                result.pathMax += pVal;
        });
        // color max/min should stay 0-100 to align with color names
        result.colorMin = -100;
        result.colorMax = 100;
    }
    else if (values && values.length > 1) {
        values.forEach((value) => {
            const val = value.value;
            if (val < 0)
                result.pathMin += val;
            if (val > 0)
                result.pathMax += val;
        });
        result.colorMin = result.pathMin;
        result.colorMax = result.pathMax;
    }
    else {
        result.pathMax = 100;
        result.colorMax = 100;
    }
    return result;
};
const useBounds = (kind, max, min, values) => {
    return useMemo(() => {
        if (min !== undefined || max !== undefined) {
            const result = { pathMax: 100, pathMin: 0, colorMax: 100, colorMin: 0 };
            if (Array.isArray(min)) {
                result.pathMin = min[0];
                result.colorMin = min[1];
            }
            else if (min !== undefined) {
                result.pathMin = min;
                result.colorMin = min;
            }
            if (Array.isArray(max)) {
                result.pathMax = max[0];
                result.colorMax = max[1];
            }
            else if (max !== undefined) {
                result.pathMax = max;
                result.colorMax = max;
            }
            return result;
        }
        return calculateBounds(values);
    }, [kind, max, min, values]);
};
const valueColor = ({ kind, bounds, value, index, }) => {
    const dataviz = structuredTokens.color.dataviz;
    const max = bounds.colorMax;
    const min = bounds.colorMin;
    let result = dataviz.single;
    if (kind === "qualitative") {
        const step = ((index % 7) + 1);
        result = dataviz.qualitative[step];
    }
    else if (kind === "sequential") {
        const step = (Math.round((value / max) * 10) *
            10);
        result = dataviz.sequential[step];
    }
    else if (kind === "divergent") {
        if (value > 0) {
            const step = (Math.round((value / max) * 10) *
                10);
            result = dataviz.divergent[`positive${step}`];
        }
        else if (value < 0) {
            const step = (Math.round((Math.abs(value) / Math.abs(min)) * 10) * 10);
            result = dataviz.divergent[`negative${step}`];
        }
        else {
            result = dataviz.divergent.center;
        }
    }
    return result;
};
const backgroundColor = (name) => {
    return structuredTokens.color.background[name];
};
const POST_DECIMAL_DIGITS = 10;
const baseUnit = 24;
const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
    };
};
const arcCommands = (centerX, centerY, radius, startAngle, endAngle) => {
    // handle that we can't draw a complete circle
    let normalizedEndAngle = endAngle;
    /*
     added endAngle - startAngle >= 360
     for SemiCircle the endAngle will never be greater then startAngle
     since it starts with a startAngle of 270.
   */
    if (endAngle > startAngle && endAngle - startAngle >= 360) {
        normalizedEndAngle = startAngle + 359.99;
    }
    const start = polarToCartesian(centerX, centerY, radius, normalizedEndAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);
    const arcSweep = normalizedEndAngle - startAngle <= 180 ? "0" : "1";
    const d = [
        "M",
        start.x.toFixed(POST_DECIMAL_DIGITS),
        start.y.toFixed(POST_DECIMAL_DIGITS),
        "A",
        radius.toFixed(POST_DECIMAL_DIGITS),
        radius.toFixed(POST_DECIMAL_DIGITS),
        0,
        arcSweep,
        0,
        end.x.toFixed(POST_DECIMAL_DIGITS),
        end.y.toFixed(POST_DECIMAL_DIGITS),
    ].join(" ");
    return d;
};
/* TranslatedEngAngle will now take the value of the
startAngle + anglePer * value and mod by 360. This was added
to take account the startAngle not being 0. So no matter the
value it will be % 360 to get the correct angle.
*/
const translateEndAngle = (startAngle, anglePer, value) => Math.max(0, startAngle + anglePer * value) % 360;
const valuePattern = (idArg, patternName, stroke) => {
    const id = `${idArg}-${patternName}-${stroke}`;
    let element = null;
    if (patternName === "dots") {
        element = (jsxs("pattern", Object.assign({ id: id, x: 0, y: 0, width: 8, height: 8, patternUnits: "userSpaceOnUse" }, { children: [jsx("rect", { x: 0, y: 0, width: 8, height: 8, fill: stroke, fillOpacity: 0.5 }), jsx("circle", { cx: 4, cy: 4, r: 3, fill: stroke })] }), stroke));
    }
    else if (patternName === "diagonals") {
        element = (jsxs("pattern", Object.assign({ id: id, x: 0, y: 0, width: 12, height: 12, patternUnits: "userSpaceOnUse" }, { children: [jsx("line", { x1: "9", y1: "0", x2: "0", y2: "9", stroke: stroke, strokeWidth: "3", strokeLinecap: "square" }), jsx("line", { x1: "12", y1: "9", x2: "9", y2: "12", stroke: stroke, strokeWidth: "3", strokeLinecap: "square" })] }), stroke));
    }
    else {
        element = (jsx("pattern", Object.assign({ id: id, x: 0, y: 0, width: 8, height: 8, patternUnits: "userSpaceOnUse" }, { children: jsx("rect", { x: 0, y: 0, width: 8, height: 8, fill: stroke }) }), stroke));
    }
    return [`url(#${id})`, element];
};

export { arcCommands, backgroundColor, baseUnit, polarToCartesian, translateEndAngle, useBounds, useKind, valueColor, valuePattern };
