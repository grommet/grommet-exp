import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Box/index.js';
import '../Button/index.js';
import { ButtonContext } from '../Button/ButtonContext.js';
import { Box } from '../Box/Box.js';

const buttonContextValue = { kind: "nav" };
const Nav = forwardRef((_a, ref) => {
    var { flex = false, gap = "xsmall" } = _a, rest = __rest(_a, ["flex", "gap"]);
    return (jsx(ButtonContext.Provider, Object.assign({ value: buttonContextValue }, { children: jsx(Box, Object.assign({ as: "nav", ref: ref, flex: flex, gap: gap }, rest)) })));
});
Nav.displayName = "Nav";

export { Nav };
