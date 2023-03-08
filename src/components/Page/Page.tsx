import { forwardRef } from "react";
import { page } from "grommet-exp-theme";
import { PageContext } from "./PageContext";

type PageProps = {
  children?: React.ReactNode;
  kind?: "wide" | "narrow" | "full";
};

const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ kind, ...rest }: PageProps, ref): JSX.Element => {
    return (
      <PageContext.Provider value={{ kind }}>
        <div className={page} ref={ref} {...rest} />
      </PageContext.Provider>
    );
  }
);

Page.displayName = "Page";

export { Page };
