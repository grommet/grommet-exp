import { forwardRef } from 'react';
import { box } from 'grommet-exp-theme';

type SizeType = 'small' | 'medium' | 'large'
type AlignType = 'start' | 'center' | 'stretch' | 'end'
type JustifyType = 'start' | 'center' | 'between' | 'end'

type SpacingType = SizeType
// type SpacingType = SizeType | { horizontal?: SizeType, vertical?: SizeType }

type BoxProps = {
  align?: AlignType;
  children?: React.ReactNode;
  direction?: 'row' | 'column';
  gap?: SizeType;
  justify?: JustifyType;
  margin?: SpacingType;
  pad?: SpacingType;
}

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ( { align, direction = 'column', gap, justify, margin, pad, ...rest } : BoxProps, ref) => {
    return (
      <div
        className={box({ align, direction, gap, justify, margin, pad })}
        ref={ref}
        {...rest}
      />
    )
  },
)

Box.displayName = 'Box';

export { Box };
