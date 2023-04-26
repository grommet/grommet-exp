import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Box/index.js';
import { Box } from '../Box/Box.js';

const Header = forwardRef((_a, ref) => {
    var { align = "center", direction = "row", flex = false, justify = "between", gap = "medium" } = _a, rest = __rest(_a, ["align", "direction", "flex", "justify", "gap"]);
    return (jsx(Box, Object.assign({ as: "header", ref: ref, align: align, direction: direction, flex: flex, gap: gap, justify: justify }, rest)));
});
Header.displayName = "Header";

export { Header };
