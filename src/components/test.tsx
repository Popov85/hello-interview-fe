import {createRoot} from 'react-dom/client'
import '../app/index.css'
import {StrictMode} from "react";
import CounterComponent from "../components/hooks/CounterComponent.tsx";

const isDev = import.meta.env.MODE === "development";

createRoot(document.getElementById("root")!).render(
    isDev ? <CounterComponent/> : <StrictMode><CounterComponent/></StrictMode>
);
