import {useEffect} from "react";
import {Component2} from "./Component2.tsx";


export const Component1 = () => {

    console.log("Component1");

    useEffect(() => {
        console.log("Component1 useEffect1");
    }, []); // Empty dependency array: Runs only on mount & unmount

    useEffect(() => {
        console.log("Component1 useEffect2");
    }, []);

    return (
        <div>
            <Component2/>
        </div>
    );
};