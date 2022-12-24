import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AddToCartProvider from "./contexts/AddToCartProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AddToCartProvider>
			<App />
		</AddToCartProvider>
	</React.StrictMode>
);
