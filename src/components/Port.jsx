import React, { useEffect, useRef } from "react";

import { portText } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Port = () => {
	const horizontalRef = useRef(null);
	const sectionsRef = useRef([]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const horizontal = horizontalRef.current;
		const sections = sectionsRef.current;

		let scrollTween = gsap.to(sections, {
			xPercent: -120 * (sections.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: horizontal,
				start: "top 56px",
				end: () => "+=" + horizontal.offsetWidth,
				pin: true,
				scrub: 1,
				invalidateOnRefresh: true,
				anticipatePin: 1,
			},
		});

		return () => {
			scrollTween.kill();
		};
	}, []);

	return (
		<section id="port" ref={horizontalRef}>
			<div className="port-inner">
				<h2 className="port-title">
					portfolio
					<em>작업물</em>
				</h2>
				<div className="port-wrap">
					{portText.map((port, key) => (
						<article className={`port-item p${key + 1}`} key={key} ref={(el) => (sectionsRef.current[key] = el)}>
							<span className="num">{port.num}.</span>
							<a href={port.view} className="img" target="_blank" rel="noreferrer">
								<img src={port.img} alt={port.title} />
							</a>
							<h3 className="title">{port.title}</h3>
							<p className="desc">{port.desc}</p>
							<a href={port.view} className="site" target="_blank" rel="noreferrer">
								사이트 보기
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Port;
