import { cloneElement, forwardRef } from "react";
import { icon } from "grommet-exp-theme";

type IconProps = {
  size?: "small" | "medium" | "large" | "xlarge";
  svg: React.ReactElement<SVGSVGElement>;
};

const Icon = forwardRef<HTMLImageElement, IconProps>(
  ({ size, svg, ...rest }: IconProps, ref): JSX.Element => {
    return cloneElement(svg, { className: icon({ size }), ...rest });
  }
);

Icon.displayName = "Icon";

export { Icon };
