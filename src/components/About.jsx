import React from "react";

import { aboutText, aboutSkill, careerText } from "../constants";

const About = () => {
	return (
		<section id="about">
			<div className="about-inner">
				<h2 className="about-title">
					about
					<em>me</em>
				</h2>
				<div className="about-desc">
					{aboutText.map((about, key) => (
						<article className={`about-item a${key+1}`} key={key}>
							<div className="about-view">
								<h3 className="title">{about.title}</h3>

								<ul className="about-list">
									{about.text.map((text, idx) => (
										<li key={idx}>
											{text}
										</li>
									))}
								</ul>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default About;
