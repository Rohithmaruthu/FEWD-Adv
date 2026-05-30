import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function Child() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                background: theme === "dark" ? "black" : "white",
                color: theme === "dark" ? "white" : "black",
                padding: "20px",
            }}
        >
            <h2>Theme: {theme}</h2>

            <button onClick={() => setTheme("dark")}>
                Dark Mode
            </button>

            <button onClick={() => setTheme("light")}>
                Light Mode
            </button>
        </div>
    );
}

export default Child;