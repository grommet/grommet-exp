import { forwardRef } from "react";
import { Box, BoxProps } from "../Box";

const Card = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      elevation = "medium",
      flex = false,
      gap = "small",
      pad = "medium",
      round = "large",
      ...rest
    }: BoxProps,
    ref
  ): JSX.Element => {
    return (
      <Box
        ref={ref}
        elevation={elevation}
        flex={flex}
        gap={gap}
        pad={pad}
        round={round}
        {...rest}
      />
    );
  }
);

Card.displayName = "Card";

export { Card };
