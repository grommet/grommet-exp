import { forwardRef } from "react";
import { Header } from "../Header";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";

type PageHeaderProps = {
  parent?: JSX.Element;
  subtitle?: string;
  title?: string;
};

const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ parent, subtitle, title, ...rest }: PageHeaderProps, ref): JSX.Element => {
    return (
      <Header
        ref={ref}
        align="stretch"
        direction="column"
        gap="none"
        pad={{ vertical: "medium" }}
        {...rest}
      >
        {parent}
        <Heading level={1}>{title}</Heading>
        {subtitle && <Paragraph level={1}>{subtitle}</Paragraph>}
      </Header>
    );
  }
);

PageHeader.displayName = "PageHeader";

export { PageHeader };
