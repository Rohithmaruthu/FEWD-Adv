import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
    const phone = "123-456-7890";

    return (
        <AppContext.Provider value={{ phone }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;