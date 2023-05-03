/// <reference types="react" />
type PageContentProps = {
    background?: "default" | "back" | "front" | "contrast";
    children?: React.ReactNode;
    className?: string;
    fill?: boolean;
};
declare const PageContent: import("react").ForwardRefExoticComponent<PageContentProps & import("react").RefAttributes<HTMLDivElement>>;
export { PageContent };
