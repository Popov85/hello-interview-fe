import {createRoot} from 'react-dom/client'
import './index.css'
import {StrictMode} from "react";
import List from "../components/refactoring/List.tsx";

const isDev = import.meta.env.MODE === "development";

const townList = [
    { name: 'Paris' },
    { name: 'Berlin' },
    { name: 'London' },
];

const markList = [
    { name: 'Toyota' },
    { name: 'Haval' },
    { name: 'Nissan' },
];

createRoot(document.getElementById("root")!).render(
    isDev ? <List towns={townList} cars={markList}/> : <StrictMode><List towns={townList} cars={markList}/></StrictMode>
);
