import { cloneElement, forwardRef } from "react";
import { button } from "grommet-exp-theme";
import { Box } from "../Box";

type ButtonProps = {
  icon?: JSX.Element;
  label?: string;
  size?: "small" | "medium" | "large";
  kind?: "default" | "secondary" | "primary";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { icon: iconProp, kind = "default", label, size, ...rest }: ButtonProps,
    ref
  ): JSX.Element => {
    const icon =
      iconProp && !iconProp.props.size
        ? cloneElement(iconProp, { size })
        : iconProp;
    const iconOnly = (icon && !label) || undefined;

    let content;
    if (icon && label) {
      content = (
        <Box direction="row" gap="small">
          {icon}
          {label}
        </Box>
      );
    } else content = icon || label;

    return (
      <button
        className={button({ iconOnly, kind, size })}
        type="button"
        ref={ref}
        {...rest}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
