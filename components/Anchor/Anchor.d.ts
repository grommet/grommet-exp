/// <reference types="react" />
type AnchorProps = {
    children?: React.ReactNode;
    icon?: JSX.Element;
    label?: string;
    disabled?: boolean;
    href?: string;
    reverse?: boolean;
};
declare const Anchor: import("react").ForwardRefExoticComponent<AnchorProps & import("react").RefAttributes<HTMLAnchorElement>>;
export { Anchor };
