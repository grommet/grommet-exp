import { forwardRef } from "react";
import { Box, BoxProps } from "../Box";

const Nav = forwardRef<HTMLDivElement, BoxProps>(
  ({ flex = false, gap = "medium", ...rest }: BoxProps, ref): JSX.Element => {
    return <Box as="nav" ref={ref} flex={flex} gap={gap} {...rest} />;
  }
);

Nav.displayName = "Nav";

export { Nav };
