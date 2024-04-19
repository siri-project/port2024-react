import React from "react";

import about from "../assets/img/about.jpg"

const introText = {
	title: [
		'Hello',
		'Siri',
	],
	desc: [
		'안녕하세요',
		'Web Publisher 장은실입니다.',
		'- 웹 표준과 웹 접근성을 준수하여 사용자에게 편리하고 접근성 높은 웹사이트 구축 가능합니다.',
		'- 다양한 기기에서 최적의 사용자 경험을 제공할 수 있는 반응형 웹사이트를 구축 가능합니다.',
		'- 동적인 웹 요소와 모션 그래픽을 활용하여 사용자의 관심을 끌고 몰입도를 높이는 작업을 수행할 수 있습니다.',
		'- 버전 관리 시스템을 사용하여 코드 관리 및 협업을 효율적으로 수행할 수 있습니다.',
		'- 마크업 가이드에 따라 일관된 작업물을 제공하여 사용자에게 최상의 경험을 제공할 수 있습니다.'
	],
};

const Intro = () => {
	return (
		<section id="intro">
			<div className="intro-inner">
				<div className="intro-title">
					<div>{introText.title[0]}</div>
					<div>{introText.title[1]}</div>
				</div>
				<div className="intro-text">
					<div className="text">
						<div>{introText.desc[0]}</div>
						<div>{introText.desc[1]}</div>
						<br />
						<div>{introText.desc[2]}</div>
						<div>{introText.desc[3]}</div>
						<div>{introText.desc[4]}</div>
						<div>{introText.desc[5]}</div>
						<div>{introText.desc[6]}</div>
						<div>{introText.desc[7]}</div>
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
