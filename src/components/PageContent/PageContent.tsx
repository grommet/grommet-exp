import { forwardRef, useContext } from "react";
import { pageContent } from "grommet-exp-theme";
import { PageContext, PageContextType } from "../Page/PageContext";

type PageContentProps = {
  background?: "normal" | "back" | "front" | "contrast";
  children?: React.ReactNode;
  fill?: boolean;
};

const PageContent = forwardRef<HTMLDivElement, PageContentProps>(
  ({ background, fill, ...rest }: PageContentProps, ref): JSX.Element => {
    const { kind } = useContext(PageContext) as PageContextType;
    return (
      <PageContext.Provider value={{ kind }}>
        <div
          className={pageContent({ background, kind })}
          ref={ref}
          {...rest}
        />
      </PageContext.Provider>
    );
  }
);

PageContent.displayName = "PageContent";

export { PageContent };
