import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { ThemeModeToggle } from "./components/ThemeModeToggle";
import AppRouter from "./routes/AppRouter";
import { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import MainComponent from "./MainComponent";

function App() {
  return (
    <>
      <ThemeProvider>
        <MainComponent />
        {/* {isAuthenticated ? (
          <AppRouter isAuthenticated={isAuthenticated} />
        ) : null} */}
      </ThemeProvider>
    </>
  );
}

export default App;
