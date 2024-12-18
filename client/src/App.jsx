import "./App.css";
// import { ThemeProvider } from "./components/theme-provider";

import { ThemeProvider } from "next-themes";

import MainComponent from "./MainComponent";

function App() {
  return (
    <>
      <ThemeProvider>
        <MainComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
