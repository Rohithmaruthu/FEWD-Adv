import { createContext, useState } from "react";

// Create context
export const ThemeContext = createContext();

// Provider component
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}