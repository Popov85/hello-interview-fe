import {useEffect} from "react";


export const EffectChild = () => {

    console.log("EffectChild");

    useEffect(() => {

        console.log("EffectChild useEffect");

        return ()=>{
            console.log("EffectChild useEffect clear");
        }
    }, []); // Empty dependency array: Runs only on mount & unmount

    return (
        <div>
            EffectChild
        </div>
    );
};