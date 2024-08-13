import React, { createContext, useState, ReactNode } from 'react';
export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
