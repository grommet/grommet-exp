import { forwardRef } from "react";
import { grid } from "grommet-exp-theme";
import { SizeType, SpacingType } from "../types";
import { translateMargin, translatePad } from "../utils";

type GridProps = {
  as?: React.ElementType;
  children?: React.ReactNode | React.ReactNode[];
  columns?: SizeType;
  gap?: SizeType;
  margin?: SpacingType;
  pad?: SpacingType;
};

const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      as,
      columns,
      gap,
      margin = "none",
      pad = "none",
      ...rest
    }: GridProps,
    ref
  ): JSX.Element => {
    const Element = as || 'div';
    return (
      <Element
        className={grid({
          columns,
          gap,
          ...translateMargin(margin),
          ...translatePad(pad),
        })}
        ref={ref}
        {...rest}
      />
    );
  }
);

Grid.displayName = "Grid";

export { Grid, GridProps };
