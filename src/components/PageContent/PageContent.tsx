import { forwardRef, useContext } from "react";
import { box, pageContent } from "grommet-exp-theme";
import { PageContext, PageContextType } from "../Page/PageContext";
import { SpacingSizeType } from "../types";

type PageContentProps = {
  background?: "default" | "back" | "front" | "contrast";
  children?: React.ReactNode;
  className?: string;
  fill?: boolean;
  gap?: SpacingSizeType;
};

const PageContent = forwardRef<HTMLDivElement, PageContentProps>(
  (
    { background, className, fill, gap, ...rest }: PageContentProps,
    ref
  ): JSX.Element => {
    const { kind } = useContext(PageContext) as PageContextType;
    return (
      <div
        className={`${pageContent({ background, kind })} ${box({
          gap,
        })} ${className}`}
        ref={ref}
        {...rest}
      />
    );
  }
);

PageContent.displayName = "PageContent";

export { PageContent };
