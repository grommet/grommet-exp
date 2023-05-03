import { forwardRef, useContext } from "react";
import { box, pageContent } from "grommet-exp-theme";
import { PageContext, PageContextType } from "../Page/PageContext";
import { SpacingSizeType } from "../types";

type PageContentProps = {
  // TO DO export and support box props
  align?: "start" | "center" | "stretch" | "end";
  background?: "default" | "back" | "front" | "contrast";
  children?: React.ReactNode;
  className?: string;
  fill?: boolean;
  gap?: SpacingSizeType;
};

const PageContent = forwardRef<HTMLDivElement, PageContentProps>(
  (
    { align, background, className, fill, gap, ...rest }: PageContentProps,
    ref
  ): JSX.Element => {
    const { kind } = useContext(PageContext) as PageContextType;
    return (
      <div
        className={`${pageContent({ kind })} ${box({
          align,
          background,
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
