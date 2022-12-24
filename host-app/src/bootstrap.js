import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const AddToCartProvider = React.lazy(() => import("Remote/AddToCartProvider"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AddToCartProvider>
			<App />
		</AddToCartProvider>
	</React.StrictMode>
);
