import React, { useState } from "react";

import { headerNav } from "../constants";

const Header = () => {
	const [show, setShow] = useState(false);

	const toggleMenu = () => {
		setShow((prevShow) => !prevShow);
	};

	return (
		<header id="header" role="banner">
			<div className="header-inner">
				<h1 className="header-logo">
					<a href="/">
						eunsil's
						<em>portfolio</em>
					</a>
				</h1>
				<nav className={`header-nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
					<ul>
						{headerNav.map((nav, key) =>(
							<li key={key}>
								<a href={nav.url}>{nav.title}</a>
							</li>
						))}
					</ul>
				</nav>
				<div className="header-nav-mobile" id="headerToggle" aria-controls="primary-menu" aria-expanded={show ? "true" : "false"} role="button" tabIndex="0" onClick={toggleMenu}>
					<span></span>
				</div>
			</div>
		</header>
	);
};

export default Header;
