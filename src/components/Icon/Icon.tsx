import { cloneElement, forwardRef } from "react";
import { icon } from "grommet-exp-theme";

type IconProps = {
  height?: "small" | "medium" | "large";
  size?: "small" | "medium" | "large" | "xlarge";
  svg: React.ReactElement<SVGSVGElement>;
};

const Icon = forwardRef<HTMLImageElement, IconProps>(
  ({ height, size, svg, ...rest }: IconProps, ref): JSX.Element => {
    return cloneElement(svg, { className: icon({ height, size }), ...rest });
  }
);

Icon.displayName = "Icon";

export { Icon };
