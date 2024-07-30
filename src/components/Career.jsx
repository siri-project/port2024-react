import React, { useState } from "react";

import { careerText } from "../constants";

const Career = () => {
	return (
		<section id="career">
			<div className="inner">
				<h2 className="title-main">
					career
				</h2>
				<div className="career-view">
					{careerText.map((career, key) => (
						<article className={`career-item career-${key+1}`} key={key}>
							<p className="period">{career.period}</p>
							<h3 className="title-sub">{career.title}</h3>
							<p className="info">
								<span className="team">{career.team}</span>/
								<span className="position">{career.position}</span>
							</p>

							<ul className="skill-list">
								{career.skill.map((skill, idx) => (
									<li key={idx}>
										<span>{skill}</span>
									</li>
								))}
							</ul>
							{/* <div className="career-text">
								<ul className="career-list">
									{career.project.map((project, idx) => (
										<li key={idx}>
											<strong>{project.projectTitle}</strong> <span>( {project.projectPeriod} )</span>
										</li>
									))}
								</ul>
							</div> */}
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Career;
