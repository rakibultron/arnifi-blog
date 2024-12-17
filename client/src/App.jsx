import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { ThemeModeToggle } from "./components/ThemeModeToggle";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
