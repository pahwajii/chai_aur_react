import { createContext, useContext } from "react";

export const Themecontext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = Themecontext.Provider;

// ✅ Custom hook for easier usage
export default function useTheme() {
  return useContext(Themecontext);
}
