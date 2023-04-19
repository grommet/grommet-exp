import { forwardRef } from "react";
import { Box } from "../Box";
import { Text } from "../Text";

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
        {label && <label htmlFor={htmlFor}>{label}</label>}
        {help && <Text>{help}</Text>}
        {children}
        {help && <Text>{help}</Text>}
        {error && <Text>{error}</Text>}
      </Box>
    );
  }
);

FormField.displayName = "FormField";

export { FormField };
