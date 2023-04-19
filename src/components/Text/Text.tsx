import { forwardRef } from "react";
import { text } from "grommet-exp-theme";

type TextProps = {
  children?: React.ReactNode;
  color?: "strong" | "weak" | "xweak";
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  level?: 1 | 2 | 3;
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
};

const Text = forwardRef<HTMLSpanElement, TextProps>(
  (
    { color, level: levelProp, size, weight, ...rest }: TextProps,
    ref
  ): JSX.Element => {
    const level = !size ? levelProp : undefined;
    return (
      <span
        className={text({ color, level, size, weight })}
        ref={ref}
        {...rest}
      />
    );
  }
);

Text.displayName = "Text";

export { Text };
