/// <reference types="react" />
import { SpacingType } from "../types";
type PageHeaderProps = {
    actions?: JSX.Element;
    pad?: SpacingType;
    parent?: JSX.Element;
    subtitle?: string;
    title?: string;
};
declare const PageHeader: import("react").ForwardRefExoticComponent<PageHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
export { PageHeader };
