import React from "react";
import "edi-zero-sample-v02/dist/esm/style.css";
import { ThemeProvider, ThemeSwitcher, ThemePage } from "edi-zero-sample-v02";

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
