import { forwardRef } from "react";
import { containerStyle } from "grommet-exp-theme";

type ContainerProps = {
  children?: JSX.Element;
  gridArea?: string;
};

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ gridArea, ...rest }: ContainerProps, ref): JSX.Element => {
    return (
      <div
        className={containerStyle}
        ref={ref}
        style={{ gridArea }}
        {...rest}
      />
    );
  }
);

Container.displayName = "Container";

export { Container, ContainerProps };
