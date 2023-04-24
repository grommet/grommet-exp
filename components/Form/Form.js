import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Box/index.js';
import { Box } from '../Box/Box.js';

var Form = forwardRef(function (_a, ref) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (jsx(Box, __assign({ ref: ref, as: "form", gap: "small" }, rest, { children: children })));
});
Form.displayName = "Form";

export { Form };
//# sourceMappingURL=Form.js.map
