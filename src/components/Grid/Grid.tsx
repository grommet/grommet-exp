import { forwardRef } from "react";
import { grid } from "grommet-exp-theme";
import { ContentSizeType, SpacingSizeType, SpacingType } from "../types";
import { translateMargin, translatePad } from "../utils";

export type GridColumnsType =
  | ContentSizeType
  | "small-small"
  | "small-flex"
  | "flex-small"
  | "small-flex-small"
  | "small-medium"
  | "medium-small"
  | "medium-flex"
  | "flex-medium"
  | "medium-medium"
  | 2;

type GapType =
  | SpacingSizeType
  | { column: SpacingSizeType; row: SpacingSizeType };

type GapStyleType = {
  gap?: SpacingSizeType;
  gapColumn?: SpacingSizeType;
  gapRow?: SpacingSizeType;
};

type GridProps = {
  as?: React.ElementType;
  align?: "start" | "center" | "stretch" | "end";
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  columns?: GridColumnsType;
  gap?: GapType;
  height?: ContentSizeType;
  margin?: SpacingSizeType;
  pad?: SpacingType;
  width?: ContentSizeType;
};

const translateGap = (gap?: GapType): GapStyleType => {
  const result: GapStyleType = {};
  if (!gap) return result;
  if (typeof gap === "string") result.gap = gap;
  if (typeof gap === "object") {
    if (gap.column) result.gapColumn = gap.column;
    if (gap.row) result.gapRow = gap.row;
  }
  return result;
};

const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      as,
      align,
      className,
      columns,
      gap,
      height,
      margin = "none",
      pad = "none",
      width,
      ...rest
    }: GridProps,
    ref
  ): JSX.Element => {
    const Element = as || "div";
    return (
      <Element
        className={`${grid({
          align,
          columns,
          ...translateGap(gap),
          height,
          ...translateMargin(margin),
          ...translatePad(pad),
          width,
        })} ${className}`}
        ref={ref}
        {...rest}
      />
    );
  }
);

Grid.displayName = "Grid";

export { Grid, GridProps };
