/// <reference types="react" />
/// <reference types="react" />
type ButtonProps = {
    active?: boolean;
    icon?: JSX.Element;
    kind?: "default" | "secondary" | "primary";
    label?: string;
    reverse?: boolean;
    size?: "xsmall" | "small" | "medium" | "large";
    type?: "button" | "reset" | "submit";
};
declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export { Button };
