import React from "react";

import ThemeSwitcher from "./components/Theme/ThemeSwitcher";
import ThemePage from "./components/Theme/ThemePage";
import ThemeProvider from "./providers/ThemeProvider";

declare global {
  interface Window {
    env: any;
  }
}

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemePage>
        <h1>Edi Example</h1>
        <ThemeSwitcher />
      </ThemePage>
    </ThemeProvider>
  );
};

export default App;
