import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Box/index.js';
import { Box } from '../Box/Box.js';

const Nav = forwardRef((_a, ref) => {
    var { flex = false, gap = "medium" } = _a, rest = __rest(_a, ["flex", "gap"]);
    return jsx(Box, Object.assign({ as: "nav", ref: ref, flex: flex, gap: gap }, rest));
});
Nav.displayName = "Nav";

export { Nav };
