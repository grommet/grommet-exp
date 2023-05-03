import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Box/index.js';
import { Box } from '../Box/Box.js';

const PageMain = forwardRef((_a, ref) => {
    var rest = __rest(_a, []);
    return jsx(Box, Object.assign({ ref: ref, gridArea: "pageMain" }, rest));
});
PageMain.displayName = "PageMain";

export { PageMain };
