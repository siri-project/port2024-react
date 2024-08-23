import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Career from "../components/Career";
import Port from "../components/Port";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import Skip from "../components/Skip";
import Main from "../components/Main";

const HomeView = () => {
	return (
		<>
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

