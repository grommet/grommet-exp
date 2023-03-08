import { forwardRef } from "react";
import { Box, BoxProps } from "../Box";

const Footer = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      align = "center",
      direction = "row",
      flex = false,
      justify = "between",
      gap = "medium",
      ...rest
    }: BoxProps,
    ref
  ): JSX.Element => {
    return (
      <Box
        as="footer"
        ref={ref}
        align={align}
        direction={direction}
        flex={flex}
        gap={gap}
        justify={justify}
        {...rest}
      />
    );
  }
);

Footer.displayName = "Footer";

export { Footer };
