import React, { useState } from "react";

import { headerNav } from "../constants";

const Header = () => {
	// const [show, setShow] = useState(false);

	// const toggleMenu = () => {
	// 	setShow((prevShow) => !prevShow);
	// };

	return (
		<header id="header" role="header">
			<div className="inner">
				<h1 className="title-main">
					<a href="/">Eunsil Jang</a>
				</h1>
				<h2 className="title-sub">UI Developer</h2>
				<p className="text">느리지만 꾸준히 노력하는 사람이 되자!</p>
				<nav className="header-nav" role="navigation" aria-label="메인 메뉴">
					<ul>
						{headerNav.map((nav, key) =>(
							<li key={key}>
								<a href={nav.url}>{nav.title}</a>
							</li>
						))}
					</ul>
				</nav>
				{/* <div className="header-nav-mobile" id="headerToggle" aria-controls="primary-menu" aria-expanded={show ? "true" : "false"} role="button" tabIndex="0" onClick={toggleMenu}>
					<span></span>
				</div> */}
			</div>
		</header>
	);
};

export default Header;
