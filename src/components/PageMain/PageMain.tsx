import React, { forwardRef } from "react";
import { Box } from "../Box";

type PageMainProps = {
  children?: React.ReactNode;
  className?: string;
};

const PageMain = forwardRef<HTMLDivElement, PageMainProps>(
  ({ ...rest }: PageMainProps, ref) => {
    return <Box ref={ref} gridArea="pageMain" {...rest} />;
  }
);

PageMain.displayName = "PageMain";

export { PageMain };
