import imgAcademy from '../assets/img/academy.jpg';
import imgLecture from '../assets/img/lecture.jpg';
import imgBook from '../assets/img/book.jpg';
import imgTetra from '../assets/img/tetra.jpg';
import imgProf from '../assets/img/prof.png';
import imgIbm from '../assets/img/ibm.jpg';
import imgLife from '../assets/img/life.jpg';
import imgAcademyM from '../assets/img/academy_m.jpg';
import imgPuri from '../assets/img/puri.jpg';
import imgAc from '../assets/img/ac.jpg';
import imgApp from '../assets/img/app.jpg';
import imgQuiz from '../assets/img/quiz.jpg';
import imgCsr from '../assets/img/csr.jpg';

export const headerNav = [
	{
		title: "about",
		url: "#about"
	},
	{
		title: "career",
		url: "#career"
	},
	{
		title: "portfolio",
		url: "#port"
	},
];

export const subTitles = [
	"Web Publisher",
	"UI Developer",
	"FrontEnd Developer"
];

export const aboutText = [
	{
		title: "소개",
		desc: [
			"안녕하세요. 웹퍼블리셔 장은실입니다.",
			"현재 자사 사이트 운영 및 구축 업무를 담당하고 있습니다.",
			"어제보다 나은 내일의 내가 되기 위해, 느리지만 꾸준히 노력하고 있습니다.",
		]
	},
	{
		title: "핵심역량",
		desc: [
			"저는 <strong>웹 표준과 웹 접근성을 준수</strong>하여 사용자에게 보다 편리하고 접근성 높은 웹사이트를 구축할 수 있습니다.",
			"다양한 기기에서 최적의 사용자 경험을 제공할 수 있는 <strong>반응형 웹사이트를 구축</strong>할 수 있습니다.",
			"<strong>동적인 웹 요소와 모션 그래픽을 활용</strong>하여 사용자의 관심을 끌고 몰입도를 높이는 작업을 수행할 수 있습니다.",
			"<strong>가이드에 따라 일관된 작업물을 제공</strong>하여 사용자에게 최상의 경험을 제공할 수 있습니다.",
			"<strong>버전 관리 시스템</strong>을 사용하여 코드 관리 및 협업을 효율적으로 수행할 수 있습니다.",
		]
	},
	{
		title: "장점",
		desc: [
			"저는 팀 내에서 주로 문서 작업을 맡아왔으며, 이를 통해 <strong>팀의 업무 효율성과 자료 관리의 일관성을 높이는 데 기여</strong>했습니다.",
			"항상 높은 품질의 결과물을 제공하기 위해 최선을 다하며, 작업의 세부적인 부분까지 신경 써서 <strong>최상의 결과를 도출하는 것을 목표</strong>로 합니다.",
			"업무를 진행하면서 발생하는 문제는 독단적으로 해결하기보다 <strong>관련 작업자들과 소통하여 최선의 방법을 찾는 협업 능력</strong>을 갖추고 있습니다.",
			"<strong>다양한 직군에서 일한 경험</strong>을 바탕으로 어떤 업무에도 유연하게 대응할 수 있습니다.",
		]
	},
];

export const careerText = [
	{
		title: "(주) 에듀윌",
		team: "프론트개발팀",
		position: "파트장",
		period: "2017.04 ~ 재직중",
		url: "//www.eduwill.net",
		stack: [
			"HTML5", "CSS3", "SCSS", "Vue.js", "jQuery", "jQuery UI", "JavaScript", "Jira", "Confluence", "Figma", "Zeplin", "Adobe Photoshop", "Git", "GiHub", "Gitlab", "Visual Studio Code",
		],
	},
	{
		title: "주식회사 이패스씨앤아이",
		team: "UI개발팀",
		position: "대리",
		period: "2015.09 ~ 2016.12",
		url: "//www.epasscni.com",
		stack: [
			"HTML5", "CSS3", "LESS", "Adobe Photoshop", "jQuery", "jQuery UI", "JavaScript",
		],
	},
	{
		title: "캠프모바일주식회사",
		team: "밴드Web개발캠프",
		position: "사원",
		period: "2014.02 ~ 2015.02",
		stack: [
			"HTML5", "CSS3", "Adobe Photoshop", "jQuery", "jQuery UI", "JavaScript", "SVN"
		],
	},
	{
		title: "주식회사 퍼니웍",
		team: "e-BIZ 웹퍼블리셔팀",
		position: "사원",
		period: "2011.12 ~ 2014.02",
		url: "http://www.funnywork.co.kr/",
		stack: [
			"HTML5", "CSS3", "Adobe Photoshop", "jQuery", "jQuery UI", "JavaScript",
		],
	},
];

export const portText = [
	{
		title: "글로벌 메인 개편 프로젝트",
		desc: [
			"<strong>개요 :</strong> 자사 사이트 내 온라인 교육과정 및 도서 홍보를 목적으로 개편한 프로젝트입니다.",
			"<strong>기간 :</strong> 2025.03 ~ 2025.05(오픈 준비 중)",
			"<strong>기여도 :</strong> 100% (PC/MO)"
		],
		stack: [
			"Vue.js", "HTML5", "SCSS", "jQuery", "javascript", "Figma", "Git"
		],
		img: imgAcademy,
		url: "https://www.eduwill.net/sites/home",
	},
	{
		title: "직영학원 PC/MO 메인 개편 프로젝트",
		desc: [
			"<strong>개요 :</strong> 학원에서 사이트 자체 운영을 주요 목적으로, 디자인 및 개발 작업 단계를 줄여 업무 효율을 극대화한 프로젝트입니다.",
			"<strong>기간 :</strong> 2024.03 ~ 2024.06",
			"<strong>기여도 :</strong> 50% (PC 메인 개편 담당)"
		],
		stack: [
			"Vue.js", "HTML5", "SCSS", "jQuery", "javascript", "Figma", "Git"
		],
		img: imgAcademy,
		url: "https://nrg.eduwill.net/sites/home",
	},
	{
		title: "9급 공무원 단과 판매관리 구축 프로젝트",
		desc: [
			"<strong>개요 :</strong> 2023 하반기 공무원 매출 증대 방안의 일환으로, 단과 상품 판매를 위한 페이지 구축 프로젝트입니다.",
			"<strong>기간 :</strong> 2023.06 ~ 2023.08",
			"<strong>기여도 :</strong> 100% (PC/MO)"
		],
		stack: [
			"HTML5", "SCSS", "jQuery", "javascript", "Figma", "Git"
		],
		img: imgLecture,
		url: "https://gov.eduwill.net/sites/DanCourse",
	},
	{
		title: "교재소개 페이지 리뉴얼 프로젝트",
		desc: [
			"<strong>개요 :</strong> 교재소개 인덱스 페이지의 사용자 편의성을 강화하고 교재 관리 백엔드를 개선하여, 운영자의 업무 효율성을 향상시키기 위한 리뉴얼 프로젝트입니다.",
			"<strong>기간 :</strong> 2022.12 ~ 2023.03",
			"<strong>기여도 :</strong> 100% (PC/MO)"
		],
		stack: [
			"HTML5", "SCSS", "jQuery", "javascript", "Figma", "Git"
		],
		img: imgBook,
		url: "https://gov.eduwill.net/sites/book",
	},
	{
		title: "TETRA(이벤트 전시 관리) 프로젝트",
		desc: [
			"<strong>개요 :</strong> 상시 이벤트 페이지 운영의 효율성을 높이고 오류를 줄이기 위해, 운영 프레임워크를 개발 및 개선하여 업무 부담과 리소스를 절감하고 안정적인 서비스를 제공하기 위한 사내 서비스입니다.",
			"<strong>기간 :</strong> 2022.01 ~ 2022.12",
			"<strong>기여도 :</strong> 30% (PC/MO, 전체 레이아웃 및 기본 요소 템플릿 담당)"
		],
		stack: [
			"Vue.js", "HTML5", "SCSS", "jQuery", "javascript", "Git"
		],
		img: imgTetra,
	},
	{
		title: "공무원 교수소개 상세 개편 프로젝트",
		desc: [
			"<strong>개요 :</strong> 강사 홍보와 개별 상품 판매 및 상세 정보 제공을 목적으로, UI를 개선한 프로젝트입니다.",
			"<strong>기간 :</strong> 2021.03 ~ 2021.08",
			"<strong>기여도 :</strong> 70% (PC/MO 전체 레이아웃 및 하단 콘텐츠 담당)"
		],
		stack: [
			"HTML5", "SCSS", "jQuery", "javascript", "Git", "Zeplin"
		],
		img: imgProf,
		url: "https://gov.eduwill.net/Prof/KO33/KO",
	},
	{
		title: "IBM(Integrated Banner Management System) 프로젝트",
		desc: [
			"<strong>개요 :</strong> 분산된 배너 시스템을 통합하고 일관된 관리 방식을 도입하여 작업 효율성과 내부 관리 효율성을 높이고, 운영 리소스를 절감하기 위한 사내 서비스입니다.",
			"<strong>기간 :</strong> 2020.01 ~ 2020.08",
			"<strong>기여도 :</strong> 100% (PC/MO)"
		],
		stack: [
			"HTML5", "SCSS", "jQuery", "javascript", "Photoshop"
		],
		img: imgIbm,
	},
	{
		title: "합격생활 사이트 구축 프로젝트",
		desc: [
			"<strong>개요 :</strong> 온라인 학습관리 서비스 강화 및 사용자 이용 편의성 증대를 목표로, 계획관리 서비스 고도화 프로젝트입니다.",
			"<strong>기간 :</strong> 2019.01 ~ 2019.07",
			"<strong>기여도 :</strong> 100% (PC/MO, 반응형 사이트)"
		],
		stack: [
			"HTML5", "SCSS", "jQuery", "javascript", "Zeplin"
		],
		img: imgLife,
		url: "https://life.eduwill.net/intro",
	},
	{
		title: "학원 모바일 사이트 구축 프로젝트",
		desc: [
			"<strong>개요 :</strong> 각 학원의 특성과 필요에 맞게 모바일 사이트를 구축하여, 학생들의 편의성과 정보 접근성을 높이기 위해 신규로 진행된 프로젝트입니다.",
			"<strong>기간 :</strong> 2018.02 ~ 2018.04",
			"<strong>기여도 :</strong> 100% (MO, 24년도 메인 리뉴얼)"
		],
		stack: [
			"HTML5", "CSS3", "jQuery", "javascript", "Zeplin"
		],
		img: imgAcademyM,
		url: "https://brand.eduwill.net/academy/index.will?code=nrg",
	},
	{
		title: "문풀훈련소 사이트 구축 프로젝트",
		desc: [
			"<strong>개요 :</strong> 문제풀이 및 회독 프로그램을 통한 학습관리 서비스 강화를 목표로, 에듀윌 문제 관리 사이트를 구축하는 프로젝트입니다.",
			"<strong>기간 :</strong> 2017.11 ~ 2018.03",
			"<strong>기여도 :</strong> 100% (PC/MO, 반응형 사이트, 22년도 메인 리뉴얼)"
		],
		stack: [
			"HTML5", "CSS3", "jQuery", "javascript", "Photoshop"
		],
		img: imgPuri,
		url: "https://puri.eduwill.net/qs/gate",
	},
	{
		title: "AC(Assessment Center) 사이트 구축 프로젝트",
		desc: [
			"<strong>개요 :</strong> 사내에서 사용하는 평가 사이트인 AC(Assessment Center)를 구축하는 프로젝트로, SmartAdmin(Responsive WebApp) 프레임워크를 활용하여 진행된 프로젝트입니다.",
			"<strong>기간 :</strong> 2017.11 ~ 2018.01",
			"<strong>기여도 :</strong> 100% (PC)"
		],
		stack: [
			"Smarty", "Bootstrap", "HTML5", "CSS3", "jQuery", "javascript"
		],
		img: imgAc,
	},
	{
		title: "독한합격앱 통합 프로젝트",
		desc: [
			"<strong>개요 :</strong> 기존에 분리 운영중인 합격앱들을 통합하는 프로젝트로, 사용자들에게 통일된 사용자 경험을 제공하고 기능을 향상 시키는 것을 목표로 합니다.",
			"<strong>기간 :</strong> 2017.07 ~ 2018.01",
			"<strong>기여도 :</strong> 100% (MO, 23년도 서비스 종료)"
		],
		stack: [
			"HTML5", "CSS3", "jQuery", "javascript", "Zeplin"
		],
		img: imgApp,
	},
	{
		title: "3분 영어퀴즈(공무원) 서비스 구축 프로젝트",
		desc: [
			"<strong>개요 :</strong> 3분 동안 진행되는 공무원 영어 퀴즈를 제공하는 페이지로, 학습관리 서비스의 초석이 되어 문풀훈련소에서 제공되는 서비스로 통합되었습니다.",
			"<strong>기간 :</strong> 2017.06 ~ 2017.09",
			"<strong>기여도 :</strong> 100% (PC/MO, 반응형 사이트, 현재 문풀훈련소 내 통합된 상태)"
		],
		stack: [
			"HTML5", "CSS3", "jQuery", "javascript", "Photoshop"
		],
		img: imgQuiz,
		url: "https://puri.eduwill.net/qs/quiz/attempt?service=1&progress=4&quizpack=37374&cf=reload&iapc=1",
	},
	{
		title: "사회공헌위원회 사이트 구축 프로젝트",
		desc: [
			"<strong>개요 :</strong> 회사의 사회공헌활동을 보다 효과적으로 홍보하고 공유하기 위한 신규 웹 사이트를 구축하는 프로젝트입니다.",
			"<strong>기간 :</strong> 2017.07 ~ 2017.08",
			"<strong>기여도 :</strong> 100% (PC/MO, 반응형 사이트, 22년도 메인 리뉴얼)"
		],
		stack: [
			"HTML5", "CSS3", "jQuery", "javascript", "Photoshop"
		],
		img: imgCsr,
		url: "https://csr.eduwill.net",
	},
];
