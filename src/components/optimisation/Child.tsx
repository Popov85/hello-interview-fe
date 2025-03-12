import {memo} from "react";

type Props = {
    name: string;
    fn: ()=>void;
};
export const Child = memo((props: Props) => {

    console.log("Child");

    return (
        <div>
            <p>{'Name = '+props.name}</p>
            <button onClick={props.fn}>Ok</button>
        </div>
    );
});