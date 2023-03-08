import { forwardRef } from 'react';
import { text } from 'grommet-exp-theme';

type ParagraphProps = {
  children?: React.ReactNode;
  color?: "normal" | "strong" | "weak";
  size?: "small" | "medium" | "large";
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ( { color, size, ...rest } : ParagraphProps, ref): JSX.Element => {
    return (
      <p
        className={text({ color, size })}
        ref={ref}
        {...rest}
      />
    )
  },
)

Paragraph.displayName = 'Paragraph';

export { Paragraph };
