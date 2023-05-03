import React, { forwardRef } from "react";
import { Box } from "../Box";

type PageAsideProps = {
  children?: React.ReactNode;
  className?: string;
};

const PageAside = forwardRef<HTMLDivElement, PageAsideProps>(
  ({ ...rest }: PageAsideProps, ref) => {
    return <Box ref={ref} gridArea="pageAside" {...rest} />;
  }
);

PageAside.displayName = "PageAside";

export { PageAside };
