import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Box/index.js';
import { Box } from '../Box/Box.js';

var Card = forwardRef(function (_a, ref) {
    var _b = _a.elevation, elevation = _b === void 0 ? "medium" : _b, _c = _a.flex, flex = _c === void 0 ? false : _c, _d = _a.gap, gap = _d === void 0 ? "small" : _d, _e = _a.pad, pad = _e === void 0 ? "medium" : _e, _f = _a.round, round = _f === void 0 ? "large" : _f, rest = __rest(_a, ["elevation", "flex", "gap", "pad", "round"]);
    return (jsx(Box, __assign({ ref: ref, elevation: elevation, flex: flex, gap: gap, pad: pad, round: round }, rest)));
});
Card.displayName = "Card";

export { Card };
//# sourceMappingURL=Card.js.map
