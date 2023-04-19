import { forwardRef } from "react";
import { text } from "grommet-exp-theme";

type ParagraphProps = {
  children?: React.ReactNode;
  color?: "strong" | "weak";
  size?: "small" | "medium" | "large";
  level?: 1 | 2 | 3;
};

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    { color, level: levelProp, size, ...rest }: ParagraphProps,
    ref
  ): JSX.Element => {
    const level = !size ? levelProp : undefined;
    return (
      <p
        className={text({ color, level, size })}
        ref={ref}
        {...rest}
      />
    );
  }
);

Paragraph.displayName = "Paragraph";

export { Paragraph };
