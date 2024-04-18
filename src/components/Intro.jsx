import React from "react";

import about from "../assets/img/about.jpg"

const introText = {
	title: 'UI developer',
	desc: ['My', 'portfolio'],
};

const Intro = () => {
	return (
		<section id="intro">
			<div className="intro-inner">
				<div className="intro-title">{introText.title}</div>
				<div className="intro-text">
					<div className="text">
						<div>{introText.desc[0]}</div>
						<div>{introText.desc[1]}</div>
					</div>
					<div className="img">
						<img src={about} alt="about" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
