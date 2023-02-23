import { forwardRef } from 'react';
import { text } from 'grommet-exp-theme';

type TextProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const Text = forwardRef<HTMLSpanElement, TextProps>(
  ( { size, ...rest } : TextProps, ref) => {
    return (
      <span
        className={text({ size })}
        ref={ref}
        {...rest}
      />
    )
  },
)

Text.displayName = 'Text';

export { Text };
