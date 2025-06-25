import React, {useState} from "react";

import styles from './Atm.module.css';


type Pair = {
    nominal: number;
    quantity: number;
}

type AtmProps = {
    nominals: Array<Pair>;
};

export default function Atm({nominals}: AtmProps) {

    //const [nominals, setNominals] = useState<Array<Pair>>([]);

    const [amount, setAmount] = useState<number>(0);

    const [output, setOutput] = useState<Array<string>>([]);

    /*useEffect(() => {
        fetchAvailableNominals().then((data: Array<Pair>) =>setNominals(data));
    }, []);*/

    const handleOnChange= (value: string)=> {
        const numericValue = parseInt(value);
        if (!isNaN(numericValue)) {
            setAmount(parseInt(value));
        } else {
            console.error("Invalid input");
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setOutput(atm(amount, nominals));
    };

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <div className={styles.inputRow}>
                <label htmlFor="amountInput" className={styles.label}>
                    Enter amount:
                </label>
                <input
                    id="amountInput"
                    type="number"
                    value={amount}
                    min={50}
                    step={50}
                    required
                    onChange={(e) => handleOnChange(e.target.value)}
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>
                    Withdraw
                </button>
            </div>

            <ul className={styles.resultList}>
                {output.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </form>

    );
}

/**
 * Returns a list of banknote breakdowns using available denominations and quantities.
 * @param amount Target amount to dispense.
 * @param nominals Object of available banknotes. Keys are denominations, values are quantities.
 * @returns String array like ["5000x1", "1000x2", "Remaining: 150"]
 */
function atm(amount: number, nominals: Array<Pair>): string[] {
    const result: string[] = [];

    [...nominals]
        .reverse()
        .forEach(({ nominal, quantity }) => {
            const quantityNeeded = Math.trunc(amount / nominal);
            const toUse = Math.min(quantityNeeded, quantity); // Take as much as possible from this nominal, even if needed is less than available
            if (toUse > 0) { // proceed if somehting is usable
                result.push(`${nominal}x${toUse}`);
                amount -= toUse * nominal;
            }
        });

    if (amount > 0) result.push(`Remaining: ${amount}`);
    return result;
}