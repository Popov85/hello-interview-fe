import { useState, useEffect } from 'react';

export const useCounter= ()=> {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const id: number = setInterval(() => {
            setCount(c => c + 1);
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return count;
}


