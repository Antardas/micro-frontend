import React from "react";
import "./App.css";
import Products from "./components/Products";
import ErrorBoundary from "./ErrorBoundary";

/* These components are load from remote app */
const RemoteApp = React.lazy(() => import("Remote/App"));
const RemoteButton = React.lazy(() => import("Remote/Button"));

function App() {
	return (
		<div>
			{/* <h1>This is the Host!</h1>
			<h2>Remote App:</h2>
			<RemoteWrapper>
				<RemoteApp />
			</RemoteWrapper>
			<h2>Remote Button:</h2>
		<br /> */}
			<RemoteWrapper>
				<Products />
			</RemoteWrapper>
			<a href="http://localhost:4000">Link to Remote App</a>
		</div>
	);
}

export default App;
const RemoteWrapper = ({ children }) => (
	<div>
		<ErrorBoundary>{children}</ErrorBoundary>
	</div>
);
