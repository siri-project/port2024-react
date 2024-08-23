import React from "react";
// import React, { useEffect, useRef } from "react";

import { portText } from "../constants";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const Port = () => {
	// const horizontalRef = useRef(null);
	// const sectionsRef = useRef([]);

	// useEffect(() => {
	// 	gsap.registerPlugin(ScrollTrigger);

	// 	const horizontal = horizontalRef.current;
	// 	const sections = sectionsRef.current;

	// 	let scrollTween = gsap.to(sections, {
	// 		xPercent: -120 * (sections.length - 1),
	// 		ease: "none",
	// 		scrollTrigger: {
	// 			trigger: horizontal,
	// 			start: "top 80px",
	// 			end: () => "+=" + horizontal.offsetWidth,
	// 			pin: true,
	// 			scrub: 1,
	// 			markers: false,
	// 			invalidateOnRefresh: true,
	// 			anticipatePin: 1,
	// 		},
	// 	});

	// 	return () => {
	// 		scrollTween.kill();
	// 	};
	// }, []);

	return (
		<section id="port">
			{/* ref={horizontalRef} */}
			<div className="inner">
				<h2 className="title-main">
					portfolio
				</h2>
				<div className="port-wrap">
					{portText.map((port, key) => (
						<article className={`port-item p${key + 1}`} key={key}>
							{/* ref={(el) => (sectionsRef.current[key] = el)} */}
							{/* <span className="num">{key + 1}</span> */}
							<a href={port.link} className="img" target="_blank" rel="noreferrer">
								<p className="thumb">
									<img src={port.img} alt={port.title} />
								</p>

								<h3 className="title-sub">{port.title}</h3>
								<ul className="text-list">
									{port.desc.map((desc, idxD) => (
										<li key={idxD}>
											{desc}
										</li>
									))}
								</ul>

								<ul className="skill-list">
									{port.skill.map((skill, idxS) => (
										<li key={idxS}>
											<span>{skill}</span>
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
