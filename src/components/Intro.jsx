import React from "react";

import about from "../assets/img/about.jpg";

import { introText } from "../constants";

const Intro = () => {
	return (
		<section id="intro">
			<div className="intro-inner">
				<h2 className="intro-title">
					<div>{introText.title[0]}</div>
					<div>{introText.title[1]}</div>
					<div>{introText.title[2]}</div>
				</h2>
				<div className="intro-text">
					<div className="intro-img">
						<img src={about} alt="about" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
