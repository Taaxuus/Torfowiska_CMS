import Navigation from "./PageStaticElements/Nav";
import Footer from "./PageStaticElements/Footer";
import Link from "next/link";

const ActuPage = ({ props }) => {
	const { title, subtitle, image, content, author } = props;
	return (
		<>
			<Navigation />
			<section className="actus section" id="actu1">
				<div className="header__logo--box">
					<Link
						href="https://www.gov.pl/web/nfosigw/program-life"
						target="_blank"
						className="header__logo header__logo--1"></Link>
					<Link
						href="https://natura2000.gdos.gov.pl/"
						target="_blank"
						className="header__logo header__logo--2"></Link>
					<Link
						href="https://www.gov.pl/web/nfosigw"
						target="_blank"
						className="header__logo header__logo--3"></Link>
				</div>
				<div className="contrast-box"></div>
				<div className="actus__content">
					<p
						className="actus__title"
						dangerouslySetInnerHTML={{ __html: title }}></p>
					<h3
						className="actus__subtitle"
						dangerouslySetInnerHTML={{ __html: subtitle }}></h3>
					<img
						src="./img/actu_actu_1inside.png"
						alt="bagna"
						className="actus__img"
					/>

					<p
						className="actus__content__text"
						dangerouslySetInnerHTML={{ __html: content }}></p>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default ActuPage;
