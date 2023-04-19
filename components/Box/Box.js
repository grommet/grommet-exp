import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { box } from 'grommet-exp-theme';
import { translateMargin, translatePad } from '../utils.js';

var Box = forwardRef(function (_a, ref) {
    var align = _a.align, as = _a.as, background = _a.background, border = _a.border, _b = _a.direction, direction = _b === void 0 ? "column" : _b, elevation = _a.elevation, flex = _a.flex, gap = _a.gap, height = _a.height, justify = _a.justify, margin = _a.margin, pad = _a.pad, round = _a.round, width = _a.width, wrap = _a.wrap, rest = __rest(_a, ["align", "as", "background", "border", "direction", "elevation", "flex", "gap", "height", "justify", "margin", "pad", "round", "width", "wrap"]);
    var Element = as || 'div';
    return (jsx(Element, __assign({ className: box(__assign(__assign(__assign({ align: align, background: background, border: border, direction: direction, elevation: elevation, flex: flex, gap: gap, height: height, justify: justify }, translateMargin(margin)), translatePad(pad)), { round: round, width: width, wrap: wrap })), ref: ref }, rest)));
});
Box.displayName = "Box";

export { Box };
//# sourceMappingURL=Box.js.map
