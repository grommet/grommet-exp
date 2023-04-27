/// <reference types="react" />
type HeadingProps = {
    children?: React.ReactNode;
    level?: 1 | 2 | 3;
};
declare const Heading: import("react").ForwardRefExoticComponent<HeadingProps & import("react").RefAttributes<HTMLHeadingElement>>;
export { Heading };
