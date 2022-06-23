import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";

import { store } from "./Components/Global/store";
import { AuthProvide } from "./Components/Global/GlobalContext";

let persistor = persistStore(store);
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AuthProvide>
					<App />
				</AuthProvide>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
