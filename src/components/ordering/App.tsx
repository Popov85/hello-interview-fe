import {useEffect} from "react";
import {Component1} from "./Component1.tsx";


export const App = () => {

    console.log("App");

    useEffect(() => {
        console.log("App useEffect1");
    }, []); // Empty dependency array: Runs only on mount & unmount

    useEffect(() => {
        console.log("App useEffect2");
    }, []);

    return (
        <div>
            <Component1/>
        </div>
    );
};