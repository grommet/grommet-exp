/// <reference types="react" />
type IconProps = {
    height?: "small" | "medium" | "large";
    size?: "small" | "medium" | "large" | "xlarge";
    svg: React.ReactElement<SVGSVGElement>;
};
declare const Icon: import("react").ForwardRefExoticComponent<IconProps & import("react").RefAttributes<HTMLImageElement>>;
export { Icon };
