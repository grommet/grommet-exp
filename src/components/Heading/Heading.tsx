import { createElement, forwardRef } from "react";
import { heading } from "grommet-exp-theme";

type HeadingProps = {
  children?: React.ReactNode;
  level?: 1 | 2 | 3;
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, level, ...rest }: HeadingProps, ref): JSX.Element => {
    const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
      createElement(`h${level}`, { ...props, ref }, children);
    return <Heading className={heading({ level })} {...rest} />;
  }
);

Heading.displayName = "Heading";

export { Heading };
