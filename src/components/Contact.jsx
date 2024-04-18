import React from "react";

const contactText = [
	{
		link: "mailto:wdt0134@gmail.com",
		title: "mail"
	},
	{
		link: "https://open.kakao.com/o/sFPNcOmg" ,
		title: "kakao"
	},
	{
		link: "https://line.me/ti/p/RVWCnGJVlM" ,
		title: "line"
	},
	// {
	// 	link: "tel:010-8644-4534",
	// 	title: "phone"
	// },
];

const Contact = () => {
	return (
		<section id="contact">
			<div className="contact-inner">
				<h2 className="contact-title">
					Contact
					<em>연락은 메일로 부탁드립니다.</em>
				</h2>
				<div className="contact-text">
					<div className="text">
						{contactText.map((contact, key) => (
							<div key={key}>
								<a href={contact.link} target="_blank" rel="noreferrer">
									{contact.title}
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
