import { forwardRef } from "react";
import { Header } from "../Header";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { Box } from "../Box";
import { Container } from "../Container";
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
      <Box className={pageHeaderContainerStyle}>
        <Header
          ref={ref}
          className={pageHeader}
          align="start"
          gap="none"
          pad={{ top: "large", bottom: "medium" }}
          {...rest}
        >
          <Container gridArea="parent">{parent}</Container>
          <Container gridArea="title">
            <Heading level={1}>{title}</Heading>
          </Container>
          <Container gridArea="actions">{actions}</Container>
          {subtitle && (
            <Container gridArea="subtitle">
              <Paragraph level={1}>{subtitle}</Paragraph>
            </Container>
          )}
        </Header>
      </Box>
    );
  }
);

PageHeader.displayName = "PageHeader";

export { PageHeader };
