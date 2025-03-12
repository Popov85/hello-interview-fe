import {useState} from "react";
import {EffectChild} from "./EffectChild.tsx";


export const EffectParent = () => {

    console.log("EffectParent");

    const [show, setShow] = useState(true);

    return (
        <div>
            {show && <EffectChild/>}
            <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        </div>
    );
};