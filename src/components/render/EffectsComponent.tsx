import {useEffect, useLayoutEffect, useState} from "react";

const EffectsComponent = () => {
    const [started, setStarted] = useState(false);

    return (
        <>
            {started ? (
                <Child/>
            ) : (
                <button onClick={() => setStarted(true)}>Start</button>
            )}
        </>
    );
};

const Child = () => {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => console.log("pass 1"));

    console.log("pass 2");

    useEffect(() => console.log("pass 4"))

    return (
        <>
            <p>Count: {count}</p>
            <button
                onClick={() => {
                    setCount((prev) => {
                        console.log("*");
                        return prev + 1; // ✅ Avoid mutating prev directly
                    });
                }}
            >
                Rerender
            </button>
        </>
    );
};

export default EffectsComponent;