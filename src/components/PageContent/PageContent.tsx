import { forwardRef, useContext } from "react";
import { pageContent } from "grommet-exp-theme";
import { PageContext, PageContextType } from "../Page/PageContext";

type PageContentProps = {
  background?: "default" | "back" | "front" | "contrast";
  children?: React.ReactNode;
  fill?: boolean;
};

const PageContent = forwardRef<HTMLDivElement, PageContentProps>(
  ({ background, fill, ...rest }: PageContentProps, ref): JSX.Element => {
    const { kind } = useContext(PageContext) as PageContextType;
    return (
      <div className={pageContent({ background, kind })} ref={ref} {...rest} />
    );
  }
);

PageContent.displayName = "PageContent";

export { PageContent };
