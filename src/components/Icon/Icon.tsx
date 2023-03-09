import { forwardRef } from "react";
import { icon } from "grommet-exp-theme";

type IconProps = {
  height?: "small" | "medium" | "large";
  size?: "small" | "medium" | "large" | "xlarge";
  src: string;
};

const Icon = forwardRef<HTMLImageElement, IconProps>(
  ({ height, size, ...rest }: IconProps, ref): JSX.Element => {
    return (
      <img className={icon({ height, size })} ref={ref} {...rest} />
    );
  }
);

Icon.displayName = "Icon";

export { Icon };
