import React from "react";

const portText = [
	{
		num: "01",
		title: "9급 공무원 단과 판매관리 구축 프로젝트",
		desc: "2023 하반기 공무원 매출 증대 방안의 일환으로 단과 상품 판매를 위한 인덱스 페이지 및 관리자 페이지 구축 프로젝트입니다.",
		img: "https://img.eduwill.net/resources/common/web/images/gnb/og_logo.png",
		view: "https://gov.eduwill.net/sites/DanCourse",
	},
	{
		num: "02",
		title: "9/7급 공무원 교재관리 개선 및 교재소개 페이지 리뉴얼 프로젝트",
		desc: "교재소개 페이지의 사용자 편의성을 강화하고 교재 관리 백엔드를 개선하여 운영자의 업무 효율성을 향상시키는 프로젝트입니다.",
		img: "https://img.eduwill.net/resources/common/web/images/gnb/og_logo.png",
		view: "https://gov.eduwill.net/sites/book",
	},
	{
		num: "03",
		title: "공무원 교수소개 상세 개편 프로젝트",
		desc: "강사 홍보, 개별 상품 판매 및 강사 상세 정보 제공을 목적으로 UI를 개선한 프로젝트입니다.",
		img: "https://img.eduwill.net/resources/common/web/images/gnb/og_logo.png",
		view: "https://gov.eduwill.net/Prof/KO33/KO",
	},
	{
		num: "04",
		title: "합격생활 사이트 구축 프로젝트",
		desc: "온라인 학습 관리 서비스의 기능과 사용자 경험을 고도화하고, 독한에듀윌 2.0 서비스의 문제점을 개선한 프로젝트입니다.",
		img: "https://img.eduwill.net/resources/life/live/images/banner/OG_190626.jpg",
		view: "https://life.eduwill.net/intro",
	},
	{
		num: "05",
		title: "문풀훈련소 사이트 구축 프로젝트",
		desc: "학습 관리 서비스를 통합하여 모의고사와 3분 영어 퀴즈 등 다양한 에듀윌 문제 관리 시스템을 구축하는 프로젝트입니다.",
		img: "https://img.eduwill.net/resources/qs/live/images/kakao_banner.jpg",
		view: "https://puri.eduwill.net/qs/gate",
	},
	{
		num: "06",
		title: "사회공헌위원회 사이트 구축 프로젝트",
		desc: "회사의 사회공헌활동을 보다 효과적으로 홍보하고 공유하기 위한 신규 웹 사이트를 구축하는 프로젝트입니다.",
		img: "https://img.eduwill.net/resources/common/web/images/gnb/og_logo.png",
		view: "https://csr.eduwill.net",
	},
];

const Port = () => {
	return (
		<section id="port">
			<div className="port-inner">
				<div className="port-title">
					portfolio
					<em>작업물</em>
				</div>
				<div className="port-wrap">
					{portText.map((port, key) => (
						<article className={`port-item p${key + 1}`} key={key}>
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
