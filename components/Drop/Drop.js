import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { drop } from 'grommet-exp-theme';
import '../Box/index.js';
import { Box } from '../Box/Box.js';

const Drop = forwardRef((_a, ref) => {
    var { flush } = _a, rest = __rest(_a, ["flush"]);
    return (jsx(Box, Object.assign({ position: "relative" }, { children: jsx(Box, Object.assign({ ref: ref, className: drop, elevation: "medium", round: "small" }, rest)) })));
});
Drop.displayName = "Drop";

export { Drop };
