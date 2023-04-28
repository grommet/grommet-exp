import { forwardRef, useCallback, useEffect, useState } from "react";
import { input, optionButton, select } from "grommet-exp-theme";
import { Box } from "../Box";
import { Drop } from "../Drop";

// TODO: keyboard interaction, WCAG attributes

// embedded for now
const FormDown = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <polyline
      fill="none"
      stroke="#000"
      strokeWidth="2"
      points="7.086 3.174 17.086 13.174 7.086 23.174"
      transform="scale(1 -1) rotate(-89 -1.32 0)"
    />
  </svg>
);

type OptionType = string | { label: string; value: string };

const splitOption = (option: OptionType) => {
  const label = typeof option === "string" ? option : option.label;
  const value = typeof option === "string" ? option : option.value;
  return [label, value];
};

type SelectProps = {
  defaultValue?: string;
  options?: string[] | { label: string; value: string }[];
  value?: string;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { defaultValue, options = [], value: valueProp, ...rest }: SelectProps,
    ref
  ): JSX.Element => {
    const [value, setValue] = useState<string | undefined>(
      valueProp ?? defaultValue
    );
    const [open, setOpen] = useState<boolean>();

    useEffect(() => {
      if (open) {
        const close = () => setOpen(false);
        document.addEventListener("click", close);
        return () => document.removeEventListener("click", close);
      }
      return undefined;
    }, [open]);

    const onClick = useCallback(
      (event: React.MouseEvent<HTMLDivElement>): void => {
        event.stopPropagation();
        setOpen((prev) => !prev);
      },
      []
    );

    return (
      <Box>
        <Box
          className={input}
          align="center"
          direction="row"
          justify="between"
          onClick={onClick}
        >
          <Box as="span" flex>
            {value}
          </Box>
          <FormDown />
        </Box>
        <select ref={ref} className={select} {...rest} value={value}>
          {options.map((option) => {
            const [label, val] = splitOption(option);
            return (
              <option key={val} value={value}>
                {label}
              </option>
            );
          })}
        </select>
        {open ? (
          <Drop>
            {options.map((option) => {
              const [label, val] = splitOption(option);
              return (
                <button
                  key={val}
                  className={optionButton}
                  onClick={(
                    event: React.MouseEvent<HTMLButtonElement>
                  ): void => {
                    event.stopPropagation();
                    setOpen(false);
                    setValue(val);
                  }}
                >
                  {label}
                </button>
              );
            })}
          </Drop>
        ) : null}
      </Box>
    );
  }
);

Select.displayName = "Select";

export { Select };
