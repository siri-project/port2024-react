import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // creatRoot() 메서드를 사용하여 렌더링할 최상위 컨테이너 생성

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
