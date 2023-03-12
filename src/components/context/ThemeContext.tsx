import { useState, createContext } from "react";

// types
type ThemeContextProviderProps = {
  children: React.ReactNode;
};
type theme = "light" | "dark";
type initial = {
  theme: theme;
  toogleTheme: () => void;
};
// create context
export const ThemeContext = createContext({} as initial);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<theme>("dark");
  const toogleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
