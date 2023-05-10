import { cloneElement, forwardRef, useContext } from "react";
import { button, buttonIcon } from "grommet-exp-theme";
import { Box } from "../Box";
import { ButtonContext, ButtonKindType } from "./ButtonContext";

type ButtonProps = {
  active?: boolean;
  icon?: JSX.Element;
  kind?: ButtonKindType;
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
      kind: kindProp = "default",
      label,
      onClick,
      reverse,
      size = "medium",
      type = "button",
      ...rest
    }: ButtonProps,
    ref
  ): JSX.Element => {
    const { kind: contextKind } = useContext(ButtonContext);
    const kind = contextKind ?? kindProp;
    const icon =
      iconProp && !iconProp.props.size
        ? cloneElement(iconProp, {
            className: buttonIcon({ kind, size }),
            key: "icon",
          })
        : iconProp;
    const iconOnly: boolean | undefined = (icon && !label) || undefined;

    let content;
    if (icon && label) {
      content = [icon, <span key="label">{label}</span>];
      content = (
        <Box direction="row" gap="small" align="center">
          {reverse ? content.reverse() : content}
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
