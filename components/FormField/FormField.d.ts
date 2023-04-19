/// <reference types="react" />
type FormFieldProps = {
    children?: JSX.Element | JSX.Element[];
    error?: string;
    help?: string;
    htmlFor?: string;
    info?: string;
    label?: string;
    name?: string;
    required?: boolean | {
        indicator: boolean;
    };
};
declare const FormField: import("react").ForwardRefExoticComponent<FormFieldProps & import("react").RefAttributes<HTMLDivElement>>;
export { FormField };
