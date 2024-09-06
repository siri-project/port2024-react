import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import './assets/scss/style.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
