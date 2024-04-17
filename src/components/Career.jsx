import React, { useState } from "react";

const careerText = [
	{
		title: "(주) 에듀윌",
		period: "2017.04 ~ 재직중",
		project: [
			{
				projectTitle: "직영학원 PC/MO 메인 개편(진행중)",
				projectPeriod: "2024.04 ~ 2024.05",
				projectContribution: "50%",
				projectLink: "https://nrg.eduwill.net/sites/home",
			},
			{
				projectTitle: "9급 공무원 단과 판매관리 구축 프로젝트",
				projectPeriod: "2023.06 ~ 2023.08",
				projectContribution: "100%",
				projectLink: "https://gov.eduwill.net/sites/DanCourse",
			},
			{
				projectTitle: "9/7급 공무원 교재관리 개선 및 교재소개 페이지 리뉴얼 프로젝트",
				projectPeriod: "2022.12 ~ 2023.03",
				projectContribution: "100%",
				projectLink: "https://gov.eduwill.net/sites/book",
			},
			{
				projectTitle: "TETRA 프로젝트",
				projectPeriod: "2022.01 ~ 2022.12",
				projectContribution: "30%",
				projectLink: "사내 서비스",
			},
			{
				projectTitle: "공무원 교수소개 상세 개편 프로젝트",
				projectPeriod: "2021.03 ~ 2021.08",
				projectContribution: "50%",
				projectLink: "https://gov.eduwill.net/Prof/KO33/KO",
			},
			{
				projectTitle: "IBM(Integrated Banner Management System) 프로젝트",
				projectPeriod: "2020.01 ~ 2020.08",
				projectContribution: "70%",
				projectLink: "사내 서비스",
			},
			{
				projectTitle: "합격생활 사이트 구축 프로젝트",
				projectPeriod: "2019.01 ~ 2019.07",
				projectContribution: "100%",
				projectLink: "https://life.eduwill.net/intro",
			},
			{
				projectTitle: "학원 모바일 사이트 구축 프로젝트",
				projectPeriod: "2018.02 ~ 2018.04",
				projectContribution: "100%",
				projectLink: "학원 모바일 사이트 구축 프로젝트",
			},
			{
				projectTitle: "문풀훈련소 사이트 구축 프로젝트",
				projectPeriod: "2017.11 ~ 2018.03",
				projectContribution: "100%",
				projectLink: "https://puri.eduwill.net/qs/gate",
			},
			{
				projectTitle: "독한합격앱(웹뷰) 통합 프로젝트",
				projectPeriod: "2017.07 ~ 2018.01",
				projectContribution: "100%",
				projectLink: "현재 앱 종료",
			},
			{
				projectTitle: "AC(Assessment Center) 사이트 구축 프로젝트",
				projectPeriod: "2017.11 ~ 2018.01",
				projectContribution: "100%",
				projectLink: "https://ac.eduwill.net/login/login",
			},
			{
				projectTitle: "3분 영어퀴즈(공무원) 서비스 구축 프로젝트",
				projectPeriod: "2017.06 ~ 2017.09",
				projectContribution: "100%",
				projectLink: "https://puri.eduwill.net/qs/quiz/attempt?service=1&progress=4&quizpack=37374&cf=reload&iapc=1",
			},
			{
				projectTitle: "사회공헌위원회 사이트 구축 프로젝트",
				projectPeriod: "2017.07 ~ 2017.08",
				projectContribution: "100%",
				projectLink: "https://csr.eduwill.net",
			},
		],
	},
	{
		title: "주식회사 이패스씨앤아이",
		period: "2015.09 ~ 2016.12",
		project: [
			{
				projectTitle: "루이까또즈 직영몰 웹사이트 및 모바일 리뉴얼",
				projectPeriod: "2016.06 ~ 2016.12",
				projectContribution: "50%",
				projectLink: "http://www.stylelq.com/",
			},
			{
				projectTitle: "인터파크투어 웨딩 사이트 고도화",
				projectPeriod: "2016.05 ~ 2016.09",
				projectContribution: "30%",
				projectLink: "http://wedding.interpark.com/main.do",
			},
			{
				projectTitle: "씨디네트웍스 미팅기어 웹사이트 운영",
				projectPeriod: "2016.05 ~ 2016.07",
				projectContribution: "50%",
				projectLink: "https://www.meetinggear.com/main.do",
			},
			{
				projectTitle: "엠파크 신규 e-Marketing 채널 구축",
				projectPeriod: "2016.02 ~ 2016.07",
				projectContribution: "50%",
				projectLink: "http://mocle.co.kr/index.asp",
			},
			{
				projectTitle: "인터파크투어 웨딩 사이트 구축",
				projectPeriod: "2015.11 ~ 2016.04",
				projectContribution: "40%",
				projectLink: "http://wedding.interpark.com/main.do",
			},
			{
				projectTitle: "Cloud Video Conference Service Portal 구축",
				projectPeriod: "2015.11 ~ 2016.02",
				projectContribution: "40%",
				projectLink: "https://www.meetinggear.com/main.do",
			},
			{
				projectTitle: "루이까또즈 직영몰 홈페이지 및 모바일사이트 유지보수",
				projectPeriod: "2015.07 ~ 2016.06",
				projectContribution: "50%",
				projectLink: "http://www.stylelq.com/",
			},
			{
				projectTitle: "동부대우전자 홈페이지 리뉴얼",
				projectPeriod: "2015.06 ~ 2015.09",
				projectContribution: "50%",
				projectLink: "http://www.dwesvc.com/main/index.do",
			},
			{
				projectTitle: "블랙야크아이앤씨 온라인몰 신규 구축",
				projectPeriod: "2015.05 ~ 2015.07",
				projectContribution: "30%",
				projectLink: "http://www.blackyakmall.com/pc/main/index.do",
			},
			{
				projectTitle: "알파 종합몰 재구축",
				projectPeriod: "2015.05 ~ 2015.07",
				projectContribution: "30%",
				projectLink: "http://www.alpha.co.kr/index.do",
			},
		],
	},
	{
		title: "캠프모바일주식회사",
		period: "2014.02 ~ 2015.02",
		project: [
			{
				projectTitle: "데스크탑 어플리케이션 UI 개발",
				projectPeriod: "2014.02 ~ 2015.02",
				projectContribution: "100%",
				projectLink: "https://www.band.us",
			},
			{
				projectTitle: "BAND 웹 운영",
				projectPeriod: "2014.02 ~ 2015.02",
				projectContribution: "30%",
				projectLink: "https://www.band.us",
			},
			{
				projectTitle: "BAND 프로모션 / 이벤트",
				projectPeriod: "2014.02 ~ 2015.02",
				projectContribution: "100%",
				projectLink: "https://www.band.us",
			},
		],
	},
	{
		title: "주식회사 퍼니웍",
		period: "2011.12 ~ 2014.02",
		project: [
			{
				projectTitle: "김포시 통합홈페이지 전면 개편사업",
				projectPeriod: "2013.12 ~ 2014.02",
				projectContribution: "40%",
				projectLink: "http://www.gimpo.go.kr/portal/main.do",
			},
			{
				projectTitle: "중앙선거관리위원회 대표 홈페이지 개편사업",
				projectPeriod: "2013.08 ~ 2013.12",
				projectContribution: "100%",
				projectLink: "http://nec.go.kr/portal/main.do",
			},
			{
				projectTitle: "한국증권금융 인터넷뱅킹 개선사업",
				projectPeriod: "2013.01 ~ 2013.06",
				projectContribution: "25%",
				projectLink: "http://www.ksfc.co.kr/ksfc/fr/main.jsp",
			},
			{
				projectTitle: "생명자원통합DB 시스템 개선 사업",
				projectPeriod: "2012.10 ~ 2012.12",
				projectContribution: "90%",
				projectLink: "https://www.bris.go.kr/portal/main/main.do",
			},
			{
				projectTitle: "종로 2012년도 종로구 홈페이지 유지보수 용역",
				projectPeriod: "2012.07 ~ 2012.07",
				projectContribution: "50%",
				projectLink: "http://www.jongno.go.kr/portalMain.do",
			},
			{
				projectTitle: "EMR 기반의 통합의료정보시스템 구축사업",
				projectPeriod: "2012.06 ~ 2012.11",
				projectContribution: "30%",
				projectLink: "https://www.kepcomedi.co.kr/portal/index.do",
			},
			{
				projectTitle: "동대문구 소프트웨어 유지 및 지원서비스",
				projectPeriod: "2011.12 ~ 2012.11",
				projectContribution: "50%",
				projectLink: "http://ddm.go.kr/",
			},
			{
				projectTitle: "2011 코리아그랜드세일 온라인 서비스개발용역",
				projectPeriod: "2011.12 ~ 2012.10",
				projectContribution: "70%",
				projectLink: "http://www.visitkoreayear.com/korea/main/main.asp",
			},
			{
				projectTitle: "재외선거 외국어홈페이지 확대 운영사업",
				projectPeriod: "2011.12 ~ 2011.12",
				projectContribution: "10%",
				projectLink: "http://ok.nec.go.kr/usr/Index.do?lang=en",
			},
		],
	},
];

const Career = () => {
	const [show, setShow] = useState(false);

	const toggleMenu = (id) => {
		setShow((prevShow) => ({
			...prevShow,
			[id]: !prevShow[id]
		}))
	};

	return (
		<section id="career">
			<div className="career-inner">
				<div className="career-title">
					career
					<em>경력</em>
				</div>
				<div className="career-desc">
					{careerText.map((career, key) => (
						<div key={key}>
							<h3 className="career-view" id="careerToggle" onClick={() => toggleMenu(key)}>
								{career.title}
								<span>{career.period}</span>
							</h3>
							{ show[key] ? (
								<ul className="career-list">
									{career.project.map((project, idx) => (
										<li key={idx}>
											<strong>{project.projectTitle}</strong><br />
											기간 : {project.projectPeriod}<br />
											참여도 : {project.projectContribution}<br />
											링크 : <a href={project.projectLink} target="_blank">{project.projectLink}</a>
										</li>
									))}
								</ul>
							) : null }
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Career;
