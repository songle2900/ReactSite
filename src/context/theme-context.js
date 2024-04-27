import { createContext, useContext, useReducer, useEffect } from "react";
import themeReducer from "./themeReducer";

export const ThemeContext = createContext();

const initialThemeState = {primary: 'color-1', background: 'bg-1'}

export const ThemeProvider = ({children}) => {
  const [themeState, dispatchTheme] = useReducer(themeReducer, initialThemeState);
  const themeHandler = (buttonClassName) => {
    dispatchTheme({type: buttonClassName})
  }
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>
}