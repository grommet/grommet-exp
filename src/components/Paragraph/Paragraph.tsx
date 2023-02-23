import { forwardRef } from 'react';
import { text } from 'grommet-exp-theme';

type ParagraphProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ( { size, ...rest } : ParagraphProps, ref) => {
    return (
      <p
        className={text({ size })}
        ref={ref}
        {...rest}
      />
    )
  },
)

Paragraph.displayName = 'Paragraph';

export { Paragraph };
