import React from "react";

import aboutImg from "../assets/img/about.jpg";
import { aboutText } from "../constants";

const about = () => {
	const getHighlightedText = (html) => {
		const regexStrong = /<strong>(.*?)<\/strong>/gi;
		const regexEm = /<em>(.*?)<\/em>/gi;
		const parts = html.split(/(<strong>.*?<\/strong>|<em>.*?<\/em>)/gi);

		return parts.map((part, index) => {
			if (regexStrong.test(part)) {
				return <strong key={index} className="highlight">{part.replace(/<\/?strong>/gi, '')}</strong>;
			} else if (regexEm.test(part)) {
				return <em key={index} className="highlight">{part.replace(/<\/?em>/gi, '')}</em>;
			} else {
				return part;
			}
		});
	};

	return (
		<section id="about">
			<div className="inner">
				<div className="about-img">
					<img src={aboutImg} alt="about" />
				</div>
				<div className="title-main">
					about
				</div>
				<div className="about-text">
					{aboutText.title.map((title, idx) => (
						<p key={idx}>
							{getHighlightedText(title)}
						</p>
					))}
				</div>
			</div>
		</section>
	);
};

export default about;
