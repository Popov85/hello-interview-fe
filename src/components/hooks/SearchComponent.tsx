import {useEffect, useState} from "react";
import useDebounce from "./useDebounce.tsx";

export const SearchComponent = () => {

    console.log("SearchComponent");

    const [query, setQuery] = useState('');

    const debouncedQuery: string = useDebounce(query, 300); // Debounce input by 300ms

    useEffect(() => {

        console.log("SearchComponent, useEffect");

        if (debouncedQuery) {
            console.log(`Fetching results for: ${debouncedQuery}`); // Fires only after user stops typing
        }
    }, [debouncedQuery]);

    return <input type="text" onChange={(e) => setQuery(e.target.value)} />;
}