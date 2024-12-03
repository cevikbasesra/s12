import React from "react";
import Hero from "./components/Hero";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
