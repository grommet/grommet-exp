import { forwardRef } from "react";

const Form = forwardRef<HTMLFormElement>((props, ref): JSX.Element => {
  return <form ref={ref} {...props} />;
});

Form.displayName = "Form";

export { Form };
