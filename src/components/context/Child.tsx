import {ContextChild} from "./ContextChild.tsx";


export const Child = () => {

    console.log("Child");

    return (
        <div>
            <ContextChild/>
        </div>
    );
};