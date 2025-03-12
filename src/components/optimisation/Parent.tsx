import {Child} from "./Child.tsx";
import {useCallback, useState} from "react";
import {Nephew} from "./Nephew.tsx";

type Props = {
    name: string
};

const arr: number[] = [1, 2, 3];

export const Parent = (props: Props) => {

    console.log("Parent");

    const [count, setCount] = useState(0);

    const [message, setMessage] = useState<string>("Hello");

    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [message]);

    return (
        <div>
            <p>Count, {count}</p>
            <p>{message}, {props.name}</p>
            <button onClick={() => setMessage("Bonjour")}>Click</button>
            <Child name="Oleg" fn={increment}/>
            <Nephew numbers={arr}/>
        </div>
    );
};