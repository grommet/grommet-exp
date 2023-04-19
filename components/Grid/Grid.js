import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { grid } from 'grommet-exp-theme';
import { translateMargin, translatePad } from '../utils.js';

var Grid = forwardRef(function (_a, ref) {
    var as = _a.as, columns = _a.columns, gap = _a.gap, _b = _a.margin, margin = _b === void 0 ? "none" : _b, _c = _a.pad, pad = _c === void 0 ? "none" : _c, rest = __rest(_a, ["as", "columns", "gap", "margin", "pad"]);
    var Element = as || 'div';
    return (jsx(Element, __assign({ className: grid(__assign(__assign({ columns: columns, gap: gap }, translateMargin(margin)), translatePad(pad))), ref: ref }, rest)));
});
Grid.displayName = "Grid";

export { Grid };
//# sourceMappingURL=Grid.js.map
