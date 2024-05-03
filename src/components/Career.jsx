import React, { useState } from "react";

import { careerText } from "../constants";

const Career = () => {
	return (
		<section id="career">
			<div className="career-inner">
				<h2 className="career-title">
					career
					<em>경력</em>
				</h2>
				<div className="career-wrap">
					{careerText.map((career, key) => (
						<article className={`career-item c${key+1}`} key={key}>
							<div className="career-view">
								<h3 className="title">{career.title}</h3>
								<div className="text">
									<span className="team">{career.team}</span>/
									<span className="position">{career.position}</span>
									<span className="period">{career.period}</span>
								</div>
							</div>
							<div className="career-desc">
								<ul className="career-list">
									{career.project.map((project, idx) => (
										<li key={idx}>
											<strong>{project.projectTitle}</strong> <span>( {project.projectPeriod} )</span>
										</li>
									))}
								</ul>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Career;
