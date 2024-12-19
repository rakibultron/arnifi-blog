import "./App.css";
import { ThemeProvider } from "./components/theme-provider";

// import { ThemeProvider } from "next-themes";

import MainComponent from "./MainComponent";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <MainComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
