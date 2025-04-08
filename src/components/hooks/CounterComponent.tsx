
import {useCounter} from "./useCounter.tsx";

//TODO: enhance to be able to cancel timer;
export default function CounterComponent() {
    const count = useCounter();
    return <h1>Seconds passed: {count}</h1>;
}