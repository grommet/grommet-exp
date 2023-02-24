import { forwardRef, ReactNode } from "react";
import { lightThemeClass } from "grommet-exp-theme";

type GrommetProps = {
  children?: ReactNode | ReactNode[];
  themeMode?: string;
};

const Grommet = forwardRef<HTMLDivElement, GrommetProps>(
  ({ children, themeMode = "light", ...rest }: GrommetProps, ref) => {
    return (
      <div
        className={themeMode === "light" ? lightThemeClass : ""}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Grommet.displayName = "Grommet";

export { Grommet };
