import {useMemo} from "react";

type Props = {
    numbers: number[];
};
export const Nephew = ({numbers}: Props) => {

    console.log("Nephew");

    const total: number = useMemo((): number => {

        console.log("Nephew is calculating sum...");

        return numbers.reduce((sum: number, num: number): number => sum + num, 0);
    }, [numbers]);

    return <div>Total: {total}</div>;
};