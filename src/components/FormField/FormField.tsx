import { forwardRef } from "react";
import { Box } from "../Box";
import { Text } from "../Text";
import { text } from "grommet-exp-theme";

type FormFieldProps = {
  children?: JSX.Element | JSX.Element[];
  error?: string;
  help?: string;
  htmlFor?: string;
  info?: string;
  label?: string;
  name?: string;
  required?: boolean | { indicator: boolean };
};

const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      children,
      error,
      help,
      htmlFor,
      info,
      label,
      name, // ignored for now
      required,
      ...rest
    },
    ref
  ): JSX.Element => {
    return (
      <Box {...rest}>
        {label && (
          <label
            className={text({ size: "xsmall", weight: "medium" })}
            htmlFor={htmlFor}
          >
            {label}
          </label>
        )}
        {help && <Text size="xsmall">{help}</Text>}
        {children}
        {help && <Text size="xsmall">{help}</Text>}
        {error && <Text size="xsmall">{error}</Text>}
      </Box>
    );
  }
);

FormField.displayName = "FormField";

export { FormField };
