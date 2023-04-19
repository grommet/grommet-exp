import { forwardRef } from "react";
import { textInput } from "grommet-exp-theme";

const TextInput = forwardRef<HTMLInputElement>(
  (props, ref): JSX.Element => {
    return (
      <input className={textInput} type="text" {...props} />
    );
  }
);

TextInput.displayName = "TextInput";

export { TextInput };
