import {useReducer} from "react";


export type State = { count: number };

export type Action = { type: "increment" } | { type: "decrement" };

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "increment":
            console.log("Incrementing");
            return { count: state.count + 1 };
        case "decrement":
            console.log("Decrementing");
            return { count: state.count - 1 };
        default:
            return state;
    }
};

export const ReducerComponent = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0});

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    );
};