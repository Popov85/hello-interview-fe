import {useEffect} from "react";


export const Component2 = () => {

    console.log("Component2");

    useEffect(() => {
        console.log("Component2 useEffect1");
    }, []); // Empty dependency array: Runs only on mount & unmount

    useEffect(() => {
        console.log("Component2 useEffect2");
    }, []);

    return (
        <div>
            Component2
        </div>
    );
};