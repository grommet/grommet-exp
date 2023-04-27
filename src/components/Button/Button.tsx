import { cloneElement, forwardRef } from "react";
import { button } from "grommet-exp-theme";
import { Box } from "../Box";

type ButtonProps = {
  active?: boolean;
  icon?: JSX.Element;
  kind?: "default" | "secondary" | "primary";
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any;
  reverse?: boolean;
  size?: "xsmall" | "small" | "medium" | "large";
  type?: "button" | "reset" | "submit";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      active,
      icon: iconProp,
      kind = "default",
      label,
      onClick,
      reverse,
      size,
      type = "button",
      ...rest
    }: ButtonProps,
    ref
  ): JSX.Element => {
    const icon =
      iconProp && !iconProp.props.size
        ? cloneElement(iconProp, { size })
        : iconProp;
    const iconOnly: boolean | undefined = (icon && !label) || undefined;

    let content;
    if (icon && label) {
      content = (
        <Box direction="row" gap="small" align="center">
          {reverse ? [label, icon] : [icon, label]}
        </Box>
      );
    } else content = icon || label;

    return (
      <button
        ref={ref}
        className={button({ active, iconOnly, kind, size })}
        type={type}
        onClick={onClick}
        {...rest}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
