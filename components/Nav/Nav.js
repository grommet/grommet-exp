import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Box/index.js';
import { Box } from '../Box/Box.js';

var Nav = forwardRef(function (_a, ref) {
    var _b = _a.flex, flex = _b === void 0 ? false : _b, _c = _a.gap, gap = _c === void 0 ? "medium" : _c, rest = __rest(_a, ["flex", "gap"]);
    return jsx(Box, __assign({ as: "nav", ref: ref, flex: flex, gap: gap }, rest));
});
Nav.displayName = "Nav";

export { Nav };
//# sourceMappingURL=Nav.js.map
