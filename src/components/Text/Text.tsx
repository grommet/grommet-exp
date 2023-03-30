import { forwardRef } from "react";
import { text } from "grommet-exp-theme";

type TextProps = {
  children?: React.ReactNode;
  color?: "normal" | "strong" | "weak";
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  level?: 1 | 2;
};

const Text = forwardRef<HTMLSpanElement, TextProps>(
  ({ color, level: levelProp, size, ...rest }: TextProps, ref): JSX.Element => {
    const level = !size ? levelProp : undefined;
    return (
      <span className={text({ color, level, size })} ref={ref} {...rest} />
    );
  }
);

Text.displayName = "Text";

export { Text };