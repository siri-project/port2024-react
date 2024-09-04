import React, { useState, useEffect } from "react";
import { headerNav, subTitles } from "../constants";

const Header = () => {
	const [activeLink, setActiveLink] = useState('#about');
	const [currentSubTitleIndex, setCurrentSubTitleIndex] = useState(0);
    const [fade, setFade] = useState(true);

	const handleClick = (event, url) => {
		event.preventDefault();

		setActiveLink(url);

		const targetId = url.replace('#', '');
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2;

			headerNav.forEach((nav) => {
				const targetId = nav.url.replace('#', '');
				const targetElement = document.getElementById(targetId);

				if (targetElement) {
					const elementTop = targetElement.offsetTop;
					const elementBottom = elementTop + targetElement.offsetHeight;

					if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
						setActiveLink(nav.url);
					}
				}
			});
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setFade(false);
			setTimeout(() => {
				setCurrentSubTitleIndex((prevIndex) => (prevIndex + 1) % subTitles.length);
				setFade(true);
			}, 500);
		}, 3500);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<header id="header">
			<div className="inner">
				<h1 className="title-main">
					<a href="/">Eunsil Jang</a>
				</h1>
				<h2 className="title-sub">
					<p className={fade ? 'fade-in' : 'fade-out'}>
						{subTitles[currentSubTitleIndex]}
					</p>
				</h2>
				<p className="text">My happiness is up to me :)</p>
				<nav className="header-nav">
					<ul>
						{headerNav.map((nav, key) =>(
							<li key={key}>
								<a href={nav.url}
									onClick={ (e) => handleClick(e, nav.url) }
									className={ activeLink === nav.url ? 'active' : '' }
								>
									{nav.title}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
