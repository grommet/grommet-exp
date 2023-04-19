import { __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { textInput } from 'grommet-exp-theme';

var TextInput = forwardRef(function (props, ref) {
    return (jsx("input", __assign({ className: textInput, type: "text" }, props)));
});
TextInput.displayName = "TextInput";

export { TextInput };
//# sourceMappingURL=TextInput.js.map
