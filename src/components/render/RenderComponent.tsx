import {useEffect, useLayoutEffect, useState} from "react";

export function RenderComponent() {

    console.log('App');

    const [state, setState] = useState(0);

    useEffect(() => {
        setState(prev => prev + 1); // Schedule re-render with state = 1
    }, []);

    useEffect(() => {
        console.log('useEffect 1');

        return () => {
            console.log('useEffect 1 cleanup');
        };
    }, [state]);

    useEffect(() => {
        console.log('useEffect 2');

        return () => {
            console.log('useEffect 2 cleanup');
        };
    }, [state]);

    useLayoutEffect(() => {
        console.log('useLayoutEffect');

        return () => {
            console.log('useLayoutEffect cleanup');
        };
    }, [state]);

    return null;
}

