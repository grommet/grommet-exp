import { forwardRef } from "react";
import { text } from "grommet-exp-theme";
import { SpacingType } from "../types";

export type TextAlignType = "start" | "center" | "end" | undefined;

type TextProps = {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
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
      className: classNameProp,
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
    let className = text({ color, level, size, textAlign, weight });
    if (classNameProp) className = `${className} ${classNameProp}`;
    return <Element className={className} ref={ref} {...rest} />;
  }
);

Text.displayName = "Text";

export { Text };
