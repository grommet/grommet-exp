import { forwardRef } from "react";
import { button } from "grommet-exp-theme";

type ButtonProps = {
  icon?: boolean;
  label?: string;
  size?: "small" | "medium" | "large";
  kind?: "default" | "secondary" | "primary";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ icon, kind, label, size, ...rest }: ButtonProps, ref): JSX.Element => {
    return (
      <button
        className={button({ kind: kind, size: size })}
        type="button"
        ref={ref}
        {...rest}
      >
        {label}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
