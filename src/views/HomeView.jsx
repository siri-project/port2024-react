import React from "react";
import Skip from "../components/Skip";
import Header from "../components/Header";
import About from "../components/About";
import Career from "../components/Career";
import Port from "../components/Port";
import Footer from "../components/Footer";
import Main from "../components/Main";

const HomeView = () => {
	return (
		<>
			<Skip />
			<Header />
			<Main>
				<About />
				<Career />
				<Port />
				<Footer />
			</Main>
		</>
	);
};

export default HomeView;

