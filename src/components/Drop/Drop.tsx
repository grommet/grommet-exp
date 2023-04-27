import { forwardRef } from "react";
import { drop } from "grommet-exp-theme";
import { Box, BoxProps } from "../Box";

type DropProps = {
  flush?: "top" | "bottom" | "left" | "right";
};

type ExtendedDropProps = BoxProps & DropProps;

const Drop = forwardRef<HTMLDivElement, ExtendedDropProps>(
  ({ flush, ...rest }: ExtendedDropProps, ref): JSX.Element => {
    return (
      <Box position="relative">
        <Box
          ref={ref}
          className={drop}
          elevation="medium"
          round="small"
          {...rest}
        />
      </Box>
    );
  }
);

Drop.displayName = "Drop";

export { Drop };
