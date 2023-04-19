import { forwardRef } from "react";

type FormProps = {
  children?: JSX.Element | JSX.Element[];
};

const Form = forwardRef<HTMLFormElement, FormProps>((props, ref): JSX.Element => {
  return <form ref={ref} {...props} />;
});

Form.displayName = "Form";

export { Form };
