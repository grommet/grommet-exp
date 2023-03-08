import { forwardRef } from 'react';
import { text } from 'grommet-exp-theme';

type TextProps = {
  children?: React.ReactNode;
  color?: "normal" | "strong" | "weak";
  size?: "small" | "medium" | "large";
}

const Text = forwardRef<HTMLSpanElement, TextProps>(
  ( { color, size, ...rest } : TextProps, ref): JSX.Element => {
    return (
      <span
        className={text({ color, size })}
        ref={ref}
        {...rest}
      />
    )
  },
)

Text.displayName = 'Text';

export { Text };
