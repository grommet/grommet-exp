/// <reference types="react" />
import { ButtonKindType } from "./ButtonContext";
type ButtonProps = {
    active?: boolean;
    icon?: JSX.Element;
    kind?: ButtonKindType;
    label?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any;
    reverse?: boolean;
    size?: "xsmall" | "small" | "medium" | "large";
    style?: object;
    type?: "button" | "reset" | "submit";
};
declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export { Button };
