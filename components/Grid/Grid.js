import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { grid } from 'grommet-exp-theme';
import { translateMargin, translatePad } from '../utils.js';

var translateGap = function (gap) {
    var result = {};
    if (!gap)
        return result;
    if (typeof gap === "string")
        result.gap = gap;
    if (typeof gap === "object") {
        if (gap.column)
            result.gapColumn = gap.column;
        if (gap.row)
            result.gapRow = gap.row;
    }
    return result;
};
var Grid = forwardRef(function (_a, ref) {
    var as = _a.as, columns = _a.columns, gap = _a.gap, height = _a.height, _b = _a.margin, margin = _b === void 0 ? "none" : _b, _c = _a.pad, pad = _c === void 0 ? "none" : _c, width = _a.width, rest = __rest(_a, ["as", "columns", "gap", "height", "margin", "pad", "width"]);
    var Element = as || "div";
    return (jsx(Element, __assign({ className: grid(__assign(__assign(__assign(__assign(__assign({ columns: columns }, translateGap(gap)), { height: height }), translateMargin(margin)), translatePad(pad)), { width: width })), ref: ref }, rest)));
});
Grid.displayName = "Grid";

export { Grid };
//# sourceMappingURL=Grid.js.map
