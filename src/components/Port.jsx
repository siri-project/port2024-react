import React from "react";

import { portText } from "../constants";

const Port = () => {
	
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
		<section id="port">
			<div className="inner">
				<h2 className="title-main">
					portfolio
				</h2>
				<div className="port-wrap">
					{portText.map((port, key) => (
						<article className={`port-item p${key + 1}`} key={key}>
							<a href={port.url} className={ port.url ? '' : 'disabled' } target="_blank" rel="noreferrer">
								<p className="thumb">
									<img src={port.img} alt={port.title} />
								</p>

								<h3 className="title-sub">
									<span className="link">{port.title}</span>
								</h3>
								<ul className="text-list">
									{port.desc.map((desc, idxD) => (
										<li key={idxD}>
											{getHighlightedText(desc)}
										</li>
									))}
								</ul>

								<ul className="stack-list">
									{port.stack.map((stack, idxS) => (
										<li key={idxS}>
											<span>{stack}</span>
										</li>
									))}
								</ul>
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Port;
