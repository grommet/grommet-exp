import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Box/index.js';
import { Box } from '../Box/Box.js';

const PageAside = forwardRef((_a, ref) => {
    var rest = __rest(_a, []);
    return jsx(Box, Object.assign({ ref: ref, gridArea: "pageAside" }, rest));
});
PageAside.displayName = "PageAside";

export { PageAside };
