import { forwardRef } from "react";
import { Box, BoxProps } from "../Box";
import { ButtonContext, ButtonContextType } from "../Button";

const buttonContextValue: ButtonContextType = { kind: "nav" };

const Nav = forwardRef<HTMLDivElement, BoxProps>(
  ({ flex = false, gap = "xsmall", ...rest }: BoxProps, ref): JSX.Element => {
    return (
      <ButtonContext.Provider value={buttonContextValue}>
        <Box as="nav" ref={ref} flex={flex} gap={gap} {...rest} />
      </ButtonContext.Provider>
    );
  }
);

Nav.displayName = "Nav";

export { Nav };
