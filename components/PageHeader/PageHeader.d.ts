/// <reference types="react" />
type PageHeaderProps = {
    actions?: JSX.Element;
    icon?: JSX.Element;
    parent?: JSX.Element;
    subtitle?: string;
    title?: string;
};
declare const PageHeader: import("react").ForwardRefExoticComponent<PageHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
export { PageHeader };
