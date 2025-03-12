import {Context, createContext} from "react";
import {Child} from "./Child.tsx";

export type Theme = {
    color: string;
}
export const ThemeContext: Context<Theme> = createContext({color: "light"});

export const ContextParent = () => {

    console.log("ContextParent");

    return (
        <ThemeContext.Provider value={{color: "dark"}}>
            <Child />
        </ThemeContext.Provider>
    )
};