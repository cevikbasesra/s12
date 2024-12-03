import { useState } from "react";

// useLocalStorage Hook'u
const useLocalStorage = (key, initialValue) => {
  // localStorage'dan değeri al
  const storedValue = localStorage.getItem(key);

  // Eğer değer varsa, onu kullan; yoksa initialValue'yu kullan
  const [value, setValue] = useState(() => {
    if (storedValue) {
      return JSON.parse(storedValue); // Eğer değer varsa, parse ederek kullan
    }
    return initialValue; // Eğer değer yoksa, başlangıç değerini kullan
  });

  // Değer değiştiğinde, localStorage'a kaydet
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue)); // localStorage'a kaydet
  };

  return [value, setStoredValue];
};

export default useLocalStorage;
