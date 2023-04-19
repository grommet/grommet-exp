/// <reference types="react" />
type PageContentProps = {
    background?: "default" | "back" | "front" | "contrast";
    children?: React.ReactNode;
    fill?: boolean;
};
declare const PageContent: import("react").ForwardRefExoticComponent<PageContentProps & import("react").RefAttributes<HTMLDivElement>>;
export { PageContent };
