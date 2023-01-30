import React from "react";
import { Theme, useTheme } from "../../context/ThemeContext";
import { cx } from "../../utils/exports.utils";

interface Props {
  children?: any;
}

const ThemePage = ({ children }: Props) => {
  const { theme } = useTheme();
  return (
    <div className={"themePage"}>
      <header
        className={cx(
          "themePageContent",
          theme === Theme.Dark && "themeDark",
          theme === Theme.Light && "themeLight"
        )}
      >
        {children}
      </header>
    </div>
  );
};

export default ThemePage;
