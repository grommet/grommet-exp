import { jsxs, jsx } from 'react/jsx-runtime';
import { structuredTokens } from 'hpe-design-tokens';

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
const strokePattern = (idArg, patternName, stroke) => {
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

export { arcCommands, backgroundColor, baseUnit, polarToCartesian, strokePattern, translateEndAngle, valueColor };
