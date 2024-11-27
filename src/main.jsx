import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from './5-Store/reduxState/store.js'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'


ReactDOM.createRoot(document.getElementById("root")).render(<Provider store={store}><App /> </Provider>);
