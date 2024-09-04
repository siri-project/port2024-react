import React from "react";

import careerPdf from "../assets/pdf/EunsilJang_resume.pdf";
import { careerText } from "../constants";

const Career = () => {
	return (
		<section id="career">
			<div className="inner">
				<h2 className="title-main">
					career
				</h2>
				<div className="career-wrap">
					{careerText.map((career, key) => (
						<article className={`career-item career-${key+1}`} key={key}>
							<a href={career.url} className={ career.url ? '' : 'disabled' } target="_blank" rel="noreferrer">
								<p className="period">{career.period}</p>
								<h3 className="title-sub">
									<span className="link">{career.title}</span>
								</h3>
								<p className="info">
									<span className="team">{career.team}</span>/
									<span className="position">{career.position}</span>
								</p>

								<ul className="stack-list">
									{career.stack.map((stack, idx) => (
										<li key={idx}>
											<span>{stack}</span>
										</li>
									))}
								</ul>
							</a>
						</article>
					))}
				</div>

				<div className="career-action">
					<a href={careerPdf} target="_blank" className="link">전체 이력서 보기</a>
				</div>
			</div>
		</section>
	);
};

export default Career;
