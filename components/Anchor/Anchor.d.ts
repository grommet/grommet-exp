/// <reference types="react" />
type AnchorProps = {
    children?: React.ReactNode;
    icon?: JSX.Element;
    label?: string;
    disabled?: boolean;
    href?: string;
    reverse?: boolean;
    size?: "xsmall" | "small" | "medium" | "large";
};
declare const Anchor: import("react").ForwardRefExoticComponent<AnchorProps & import("react").RefAttributes<HTMLAnchorElement>>;
export { Anchor };
