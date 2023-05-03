import { forwardRef } from "react";
import { box } from "grommet-exp-theme";
import { ContentSizeType, SpacingSizeType, SpacingType } from "../types";
import { translateMargin, translatePad } from "../utils";

export type BackgroundType =
  | "default"
  | "back"
  | "front"
  | "contrast"
  | "active"
  | "selected";
export type AlignType = "start" | "center" | "stretch" | "end";
export type JustifyType = "start" | "center" | "between" | "end";

type BoxProps = {
  align?: AlignType;
  as?: React.ElementType;
  background?: BackgroundType;
  border?: boolean | "top" | "bottom" | "left" | "right";
  children?: React.ReactNode;
  className?: string;
  direction?: "row" | "column" | "row-responsive";
  elevation?: "small" | "medium" | "large";
  flex?: boolean | "grow" | "shrink";
  gap?: SpacingSizeType;
  gridArea?: string;
  height?: ContentSizeType;
  id?: string;
  justify?: JustifyType;
  margin?: SpacingType;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => any;
  pad?: SpacingType;
  position?: "absolute" | "fixed" | "relative";
  round?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "full";
  width?: ContentSizeType;
  wrap?: boolean;
};

const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      align,
      as,
      background,
      border,
      className: classNameProp,
      direction = "column",
      elevation,
      flex,
      gap,
      gridArea,
      height,
      id,
      justify,
      margin,
      pad,
      position,
      round,
      width,
      wrap,
      ...rest
    }: BoxProps,
    ref
  ): JSX.Element => {
    const Element = as || "div";
    let className = box({
      align,
      background,
      border,
      direction,
      elevation,
      flex,
      gap,
      height,
      justify,
      ...translateMargin(margin),
      ...translatePad(pad),
      position,
      round,
      width,
      wrap,
    });
    if (classNameProp) className = `${className} ${classNameProp}`;

    return (
      <Element
        className={className}
        style={{ gridArea }}
        ref={ref}
        id={id}
        {...rest}
      />
    );
  }
);

Box.displayName = "Box";

export { Box, BoxProps };
