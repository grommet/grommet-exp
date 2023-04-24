/// <reference types="react" />
/// <reference types="react" />
type IconProps = {
    height?: "small" | "medium" | "large";
    size?: "small" | "medium" | "large" | "xlarge";
    src: string;
};
declare const Icon: import("react").ForwardRefExoticComponent<IconProps & import("react").RefAttributes<HTMLImageElement>>;
export { Icon };
