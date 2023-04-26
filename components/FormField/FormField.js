import { __rest } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Box/index.js';
import '../Text/index.js';
import { text } from 'grommet-exp-theme';
import { Box } from '../Box/Box.js';
import { Text } from '../Text/Text.js';

const FormField = forwardRef((_a, ref) => {
    var { children, error, help, htmlFor, info, label, name, // ignored for now
    required } = _a, rest = __rest(_a, ["children", "error", "help", "htmlFor", "info", "label", "name", "required"]);
    return (jsxs(Box, Object.assign({}, rest, { children: [label && (jsx("label", Object.assign({ className: text({ size: "xsmall", weight: "medium" }), htmlFor: htmlFor }, { children: label }))), help && jsx(Text, Object.assign({ size: "xsmall" }, { children: help })), children, help && jsx(Text, Object.assign({ size: "xsmall" }, { children: help })), error && jsx(Text, Object.assign({ size: "xsmall" }, { children: error }))] })));
});
FormField.displayName = "FormField";

export { FormField };
