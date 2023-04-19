import { __rest, __assign } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Box/index.js';
import '../Text/index.js';
import { text } from 'grommet-exp-theme';
import { Box } from '../Box/Box.js';
import { Text } from '../Text/Text.js';

var FormField = forwardRef(function (_a, ref) {
    var children = _a.children, error = _a.error, help = _a.help, htmlFor = _a.htmlFor, info = _a.info, label = _a.label, name = _a.name, // ignored for now
    required = _a.required, rest = __rest(_a, ["children", "error", "help", "htmlFor", "info", "label", "name", "required"]);
    return (jsxs(Box, __assign({}, rest, { children: [label && (jsx("label", __assign({ className: text({ size: "xsmall", weight: "medium" }), htmlFor: htmlFor }, { children: label }))), help && jsx(Text, __assign({ size: "xsmall" }, { children: help })), children, help && jsx(Text, __assign({ size: "xsmall" }, { children: help })), error && jsx(Text, __assign({ size: "xsmall" }, { children: error }))] })));
});
FormField.displayName = "FormField";

export { FormField };
//# sourceMappingURL=FormField.js.map
