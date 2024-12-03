import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

// useContext hook
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("tr");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "tr" ? "en" : "tr"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
