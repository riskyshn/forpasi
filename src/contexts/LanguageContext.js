import { createContext, useContext, useState } from 'react';

// 1. Buat Context
const LanguageContext = createContext();

// 2. Provider untuk membungkus aplikasi
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('id'); // default ke 'id'

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Custom hook biar gampang pakai
export const useLanguage = () => useContext(LanguageContext);
