import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Box/index.js';
import { Box } from '../Box/Box.js';

var Footer = forwardRef(function (_a, ref) {
    var _b = _a.align, align = _b === void 0 ? "center" : _b, _c = _a.direction, direction = _c === void 0 ? "row" : _c, _d = _a.flex, flex = _d === void 0 ? false : _d, _e = _a.justify, justify = _e === void 0 ? "between" : _e, _f = _a.gap, gap = _f === void 0 ? "medium" : _f, rest = __rest(_a, ["align", "direction", "flex", "justify", "gap"]);
    return (jsx(Box, __assign({ as: "footer", ref: ref, align: align, direction: direction, flex: flex, gap: gap, justify: justify }, rest)));
});
Footer.displayName = "Footer";

export { Footer };
//# sourceMappingURL=Footer.js.map
