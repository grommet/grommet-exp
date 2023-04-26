/// <reference types="react" />
/// <reference types="react" />
type AnchorProps = {
    children?: React.ReactNode;
    disabled?: boolean;
    href?: string;
};
declare const Anchor: import("react").ForwardRefExoticComponent<AnchorProps & import("react").RefAttributes<HTMLAnchorElement>>;
export { Anchor };
