import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import {decrement, increment, setName, setValue} from "../../store/reducers/rtkReducer.ts";
import {FC} from "react";
import {ChildRTK} from "./ChildRTK.tsx";

export const EntryRTK: FC = () => {

    console.log("EntryRTK");

    const dispatch = useDispatch();

    const value: number = useSelector((state: RootState): number => state.rtkReducer.value);

    return (
        <div>
            <h2>Counter: {value}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(setValue(10))}>Set to 10</button>
            <button onClick={() => dispatch(setName("Mykola"))}>Set name to Mykola</button>
            <ChildRTK/>
        </div>
    );
};