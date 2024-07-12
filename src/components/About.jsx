import React from "react";

import aboutImg from "../assets/img/about.jpg";

import { aboutText } from "../constants";

const about = () => {
	return (
		<section id="about">
			<div className="about-inner">
				<div className="about-img">
					<img src={aboutImg} alt="about" />
				</div>
				<div className="about-text">
					<p>{aboutText.title[0]}</p>
					<p>{aboutText.title[1]}</p>
					<p>{aboutText.title[2]}</p>
					<p>{aboutText.title[3]}</p>
					<p>{aboutText.title[4]}</p>
					<p>{aboutText.title[5]}</p>
					<p>{aboutText.title[6]}</p>
					<p>{aboutText.title[7]}</p>
					<p>{aboutText.title[8]}</p>
				</div>
			</div>
		</section>
	);
};

export default about;
