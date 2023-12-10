"use client";

import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { VisuallyHidden, useSwitch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = (props: any) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);
  const [mount, setMount] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "h-8 w-8",
              "flex items-center justify-center",
              "bg-default-100 hover:bg-default-200 rounded-lg",
            ],
          })}
          onClick={() => setTheme(isSelected ? "dark" : "light")}
        >
          {isSelected ? <FaSun /> : <FaMoon />}
        </div>
      </Component>
    </div>
  );
};

export default ThemeSwitcher;
