import { forwardRef } from "react";
import { anchor } from "grommet-exp-theme";
import { Box } from "../Box";

type AnchorProps = {
  children?: React.ReactNode;
  icon?: JSX.Element;
  label?: string;
  disabled?: boolean;
  href?: string;
  reverse?: boolean;
  size?: "xsmall" | "small" | "medium" | "large";
};

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  (
    {
      children,
      disabled,
      href,
      icon,
      label,
      reverse,
      size,
      ...rest
    }: AnchorProps,
    ref
  ): JSX.Element => {
    let content = children;
    const first = reverse ? label : icon;
    const second = reverse ? icon : label;
    if (label || icon)
      content = (
        <Box direction="row" align="center" gap="xsmall">
          {first}
          {second}
        </Box>
      );

    return (
      <a
        className={anchor({ size })}
        ref={ref}
        {...rest}
        href={!disabled ? href : undefined}
      >
        {content}
      </a>
    );
  }
);

Anchor.displayName = "Anchor";

export { Anchor };
