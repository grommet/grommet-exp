import { forwardRef } from "react";
import { Box, BoxProps } from "../Box";

type FormProps = {
  children?: JSX.Element | JSX.Element[];
};

const Form = forwardRef<HTMLDivElement, FormProps & BoxProps>(
  ({ children, ...rest }, ref): JSX.Element => {
    return (
      <Box ref={ref} as="form" gap="small" {...rest}>
        {children}
      </Box>
    );
  }
);

Form.displayName = "Form";

export { Form };
