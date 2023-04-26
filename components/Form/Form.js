import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Box/index.js';
import { Box } from '../Box/Box.js';

const Form = forwardRef((_a, ref) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return (jsx(Box, Object.assign({ ref: ref, as: "form", gap: "small" }, rest, { children: children })));
});
Form.displayName = "Form";

export { Form };
