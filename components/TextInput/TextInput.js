import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { textInput } from 'grommet-exp-theme';

const TextInput = forwardRef((props, ref) => {
    return (jsx("input", Object.assign({ ref: ref, className: textInput, type: "text" }, props)));
});
TextInput.displayName = "TextInput";

export { TextInput };
