import { forwardRef } from "react";
import { Header } from "../Header";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { Box } from "../Box";
import {
  actions as actionsStyle,
  pageHeader,
  pageHeaderContainerStyle,
} from "grommet-exp-theme";

type PageHeaderProps = {
  actions?: JSX.Element;
  icon?: JSX.Element;
  parent?: JSX.Element;
  subtitle?: string;
  title?: string;
};

const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  (
    { actions, icon, parent, subtitle, title, ...rest }: PageHeaderProps,
    ref
  ): JSX.Element => {
    return (
      <Box className={pageHeaderContainerStyle} gridArea="pageHeader">
        <Header
          ref={ref}
          className={pageHeader({ icon: icon ? true : false })}
          align="start"
          gap="none"
          {...rest}
        >
          {icon && (
            <Box
              gridArea="icon"
              pad={parent ? { vertical: "medium" } : { bottom: "medium" }}
            >
              {icon}
            </Box>
          )}
          {parent && <Box gridArea="parent">{parent}</Box>}
          <Box gridArea="title">
            <Heading level={1}>{title}</Heading>
          </Box>
          {subtitle && (
            <Box gridArea="subtitle">
              <Paragraph level={1}>{subtitle}</Paragraph>
            </Box>
          )}
          {actions && (
            <Box gridArea="actions" className={actionsStyle}>
              {actions}
            </Box>
          )}
        </Header>
      </Box>
    );
  }
);

PageHeader.displayName = "PageHeader";

export { PageHeader };
