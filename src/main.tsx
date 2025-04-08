import {createRoot} from 'react-dom/client'
import './index.css'
//import {Provider} from "react-redux";
//import {store} from "./components/redux/store/store.ts";
import {StrictMode} from "react";
//import {Application} from "./components/redux/apps/phones/Application.tsx";
import CounterComponent from "./components/hooks/CounterComponent.tsx";

const isDev = import.meta.env.MODE === "development";

createRoot(document.getElementById("root")!).render(
    isDev ? <CounterComponent/> : <StrictMode><CounterComponent/></StrictMode>
);

/*const container = document.getElementById("root")

if (container) {

    const root = createRoot(container)

    root.render(
        isDev ?
            <Provider store={store}>
                <Application />
            </Provider> :
        <StrictMode>
            <Provider store={store}>
                <Application />
            </Provider>
        </StrictMode>,
    )
} else {
    throw new Error(
        "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
    )
}*/
