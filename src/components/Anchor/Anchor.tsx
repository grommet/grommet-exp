import { forwardRef } from 'react';
import { anchor } from 'grommet-exp-theme';

type AnchorProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  href?: string;
}

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ( { disabled, href, ...rest } : AnchorProps, ref): JSX.Element => {
    return (
      <a
        className={anchor}
        ref={ref}
        {...rest}
        href={!disabled ? href : undefined}
      />
    )
  },
)

Anchor.displayName = 'Anchor';

export { Anchor };
