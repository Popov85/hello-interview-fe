import {useContext} from "react";
import {Theme, ThemeContext} from "./ContextParent.tsx";


export const ContextChild = () => {

    const theme: Theme = useContext(ThemeContext);

    console.log("ContextChild");

    return (
        <div>
            Theme = {theme.color}
        </div>
    );
};