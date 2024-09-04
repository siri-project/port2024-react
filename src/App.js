import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView";
// import smooth from "./utils/smooth";
// import link from "./utils/link";

const App = () => {
	// useEffect (() => {
	// 	link();
	// }, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeView />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
