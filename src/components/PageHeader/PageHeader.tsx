import { forwardRef } from "react";
import { Header } from "../Header";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { Box } from "../Box";
import {
  pageHeader,
  pageHeaderContainerStyle,
  pageHeaderParent,
  pageHeaderTitle,
  pageHeaderSubtitle,
  pageHeaderActions,
} from "grommet-exp-theme";

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
      <Box className={pageHeaderContainerStyle}>
        <Header
          ref={ref}
          className={pageHeader}
          align="start"
          gap="none"
          pad={{ top: "large", bottom: "medium" }}
          {...rest}
        >
          <Box className={pageHeaderParent}>{parent}</Box>
          <Box className={pageHeaderTitle}>
            <Heading level={1}>{title}</Heading>
          </Box>
          <Box className={pageHeaderActions}>{actions}</Box>
          {subtitle && (
            <Box className={pageHeaderSubtitle}>
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
