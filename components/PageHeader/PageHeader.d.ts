/// <reference types="react" />
/// <reference types="react" />
type PageHeaderProps = {
    parent?: JSX.Element;
    subtitle?: string;
    title?: string;
};
declare const PageHeader: import("react").ForwardRefExoticComponent<PageHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
export { PageHeader };
