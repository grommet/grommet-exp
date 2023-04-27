/// <reference types="react" />
type SelectProps = {
    defaultValue?: string;
    options?: string[] | {
        label: string;
        value: string;
    }[];
    value?: string;
};
declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLSelectElement>>;
export { Select };
