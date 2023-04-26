/// <reference types="react" />
/// <reference types="react" />
type PageProps = {
    children?: React.ReactNode;
    kind?: "wide" | "narrow" | "full";
};
declare const Page: import("react").ForwardRefExoticComponent<PageProps & import("react").RefAttributes<HTMLDivElement>>;
export { Page };
