import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView";
// import smooth from "./utils/smooth";
// import link from "./utils/link";

const App = () => {
	// useEffect (() => {
	// 	link();
	// }, []);

	return (
		<HashRouter basename="/">
			<Routes>
				<Route path="/" element={<HomeView />} />
			</Routes>
		</HashRouter>
	);
};

export default App;
