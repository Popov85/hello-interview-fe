import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay: number) => {

    console.log("useDebounce");

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {

        console.log("useDebounce useEffect");

        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;

