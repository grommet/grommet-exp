import { forwardRef } from "react";
import { text } from "grommet-exp-theme";
import { SpacingType } from "../types";

export type TextAlignType = "start" | "center" | "end" | undefined;

type TextProps = {
  as?: React.ElementType;
  children?: React.ReactNode;
  color?: "strong" | "weak" | "xweak";
  margin?: SpacingType;
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  textAlign?: TextAlignType;
  weight?: "light" | "regular" | "medium" | "semibold" | "bold";
  level?: 1 | 2 | 3;
};

const Text = forwardRef<HTMLSpanElement, TextProps>(
  (
    {
      as,
      color,
      level: levelProp,
      size,
      textAlign,
      weight,
      ...rest
    }: TextProps,
    ref
  ): JSX.Element => {
    const Element = as || "span";
    const level = !size ? levelProp : undefined;
    return (
      <Element
        className={text({ color, level, size, textAlign, weight })}
        ref={ref}
        {...rest}
      />
    );
  }
);

Text.displayName = "Text";

export { Text };
