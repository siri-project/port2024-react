import React, { useEffect } from "react"; // react 라이브러리 호출
import { BrowserRouter, Route, Routes } from "react-router-dom"; // react-router-dom에서 필요한 모듈 호출

import HomeView from "./views/HomeView"; // HomeView라는 이름으로, 해당 경로에 있는 컴포넌트 호출
import lenis from "./utils/lenis";
import link from "./utils/link";

const App = () => { // App 이라는 이름의 상수 선언, 화살표 함수(arrow function)로 정의된 함수형 컴포넌트는 입력을 받아서 화면에 렌더링할 JSX요소를 반환하는 역할.
	useEffect (() => {
		lenis();
		link();
	}, []);

	return ( // 함수형 컴포넌트에서 반환하는 JSX(Javascript XML)요소
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeView />} />
			</Routes>
		</BrowserRouter>
	);
};
/*
<BrowserRouter>
- 라우팅 적용하기 위한 컴포넌트, 애플리케이션의 최상위 컴포넌트인 App 컴포넌트를 감싸서 라우팅 설정을 적용할 수 있도록 한다

<Routes>
- 라우트들을 정의하는 컨테이너, 각각의 Route 컴포넌트들을 Routes 컴포넌트 내부에 정의하여 경로와 컴포넌트를 매핑

<Route path="/" element={<HomeView />} />
- "/" 경로에 해당하는 HomeView 컴포넌트를 렌더링하도록 설정
- path 속성에는 경로 지정, element 속성에는 해당 경로에 랜더링할 컴포넌트를 JSX문법으로 전달
*/

export default App; // App 컴포넌트를 다른 파일에서 재사용할 수 있도록 내보내기 설정
