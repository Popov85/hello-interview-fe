import {createRoot} from 'react-dom/client'
import './index.css'
import {StrictMode} from "react";
import {Provider} from 'react-redux';
import {store} from "./store.ts";
import {PhonesPage} from "../features/phones/PhonesPage.tsx";

const isDev = import.meta.env.MODE === "development";

const container = document.getElementById("root")

if (container) {

    const root = createRoot(container)

    root.render(
        isDev ?
            <Provider store={store}>
                <PhonesPage/>
            </Provider> :
            <StrictMode>
                <Provider store={store}>
                    <PhonesPage/>
                </Provider>
            </StrictMode>,
    )
} else {
    throw new Error(
        "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
    )
}
