import {createRoot} from 'react-dom/client'
import './index.css'
import {StrictMode} from "react";
import Atm from "../components/atm/Atm.tsx";

const isDev = import.meta.env.MODE === "development";

/*const townList = [
    { name: 'Paris' },
    { name: 'Berlin' },
    { name: 'London' },
];

const markList = [
    { name: 'Toyota' },
    { name: 'Haval' },
    { name: 'Nissan' },
];*/

const nominals= [
    { nominal: 50, quantity: 1 },
    { nominal: 100, quantity: 6 },
    { nominal: 200, quantity: 3 },
    { nominal: 500, quantity: 2 },
    { nominal: 1000, quantity: 5 },
    { nominal: 2000, quantity: 1 },
    { nominal: 5000, quantity: 2 }
];


createRoot(document.getElementById("root")!).render(
    isDev ? <Atm nominals={nominals}/> : <StrictMode><Atm nominals={nominals}/></StrictMode>
);
