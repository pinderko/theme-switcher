import React from "react";
import "edi-theme-switcher/dist/esm/style.css";
import { ThemeProvider, ThemeSwitcher, ThemePage } from "edi-theme-switcher";

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemePage>
          <h1>ThemeSwitcher Example</h1>
          <ThemeSwitcher />
        </ThemePage>
      </ThemeProvider>
    </>
  );
}

export default App;
