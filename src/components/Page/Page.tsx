import { forwardRef } from "react";
import { page } from "grommet-exp-theme";
import { PageContext } from "./PageContext";

type PageProps = {
  children?: React.ReactNode;
  kind?: "wide" | "narrow" | "full";
  layout?: "header-main-aside" | "header-main";
};

const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ kind, layout, ...rest }: PageProps, ref): JSX.Element => {
    return (
      <PageContext.Provider value={{ kind, layout }}>
        <div className={page} ref={ref} {...rest} />
      </PageContext.Provider>
    );
  }
);

Page.displayName = "Page";

export { Page };
