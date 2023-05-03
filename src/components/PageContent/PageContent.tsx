import { forwardRef, useContext } from "react";
import { pageContent } from "grommet-exp-theme";
import { PageContext, PageContextType } from "../Page/PageContext";

type PageContentProps = {
  background?: "default" | "back" | "front" | "contrast";
  children?: React.ReactNode;
  className?: string;
  fill?: boolean;
};

const PageContent = forwardRef<HTMLDivElement, PageContentProps>(
  (
    { background, className, fill, ...rest }: PageContentProps,
    ref
  ): JSX.Element => {
    const { kind } = useContext(PageContext) as PageContextType;
    return (
      <div
        className={`${pageContent({ background, kind })} ${className}`}
        ref={ref}
        {...rest}
      />
    );
  }
);

PageContent.displayName = "PageContent";

export { PageContent };
