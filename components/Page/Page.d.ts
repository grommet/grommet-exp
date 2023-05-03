/// <reference types="react" />
type PageProps = {
    children?: React.ReactNode;
    kind?: "wide" | "narrow" | "full";
    layout?: "header-main-aside" | "header-main";
};
declare const Page: import("react").ForwardRefExoticComponent<PageProps & import("react").RefAttributes<HTMLDivElement>>;
export { Page };
