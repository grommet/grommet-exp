import { forwardRef } from "react";
import { Header } from "../Header";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { Box } from "../Box";
import { pageHeader, pageHeaderContainerStyle } from "grommet-exp-theme";

type PageHeaderProps = {
  actions?: JSX.Element;
  parent?: JSX.Element;
  subtitle?: string;
  title?: string;
};

const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  (
    { actions, parent, subtitle, title, ...rest }: PageHeaderProps,
    ref
  ): JSX.Element => {
    return (
      <Box className={pageHeaderContainerStyle} gridArea="pageHeader">
        <Header
          ref={ref}
          className={pageHeader}
          align="start"
          gap="none"
          {...rest}
        >
          <Box gridArea="parent">{parent}</Box>
          <Box gridArea="title">
            <Heading level={1}>{title}</Heading>
          </Box>
          <Box gridArea="actions">{actions}</Box>
          {subtitle && (
            <Box gridArea="subtitle">
              <Paragraph level={1}>{subtitle}</Paragraph>
            </Box>
          )}
        </Header>
      </Box>
    );
  }
);

PageHeader.displayName = "PageHeader";

export { PageHeader };
