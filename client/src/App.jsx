import { Children } from "react";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { ThemeModeToggle } from "./components/ThemeModeToggle";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="app">
          <header className="app-header">
            <ThemeModeToggle />
          </header>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
