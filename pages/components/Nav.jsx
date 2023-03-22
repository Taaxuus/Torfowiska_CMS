// import Link from "next/link";
import { useState } from "react";
import { Link as reactLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

const Navigation = () => {
	const [btnActvie, setBtnActvie] = useState(true);
	const [navClass, setNavClass] = useState("nav");
	const [navItemClass, setnavItemClass] = useState("nav__item");

	const handleNav = () => {
		setBtnActvie((prevActive) => !prevActive);
		setNavClass(btnActvie ? " nav nav--active" : "nav");
		setnavItemClass(btnActvie ? "nav__item nav-items-animation" : "nav__item");
	};

	return (
		<>
			<button onClick={handleNav} className="burger-btn">
				<div className="burger-btn__box">
					<div className="burger-btn__bars"></div>
				</div>
			</button>

			<nav className={navClass}>
				<div className="nav__items">
					<Link
						activeClass="active"
						to="header"
						spy={true}
						smooth={true}
						duration={200}
						scroll={true}
						href="/"
						onClick={handleNav}
						className={navItemClass}>
						Strona Główna
					</Link>
					<Link
						activeClass="active"
						to="actu"
						spy={true}
						smooth={true}
						duration={200}
						href="#actu"
						onClick={handleNav}
						className={navItemClass}>
						Aktualności
					</Link>

					<Link
						activeClass="active"
						scroll={true}
						to="about"
						spy={true}
						smooth={true}
						// offset={-70}
						duration={200}
						href="#about"
						onClick={handleNav}
						className={navItemClass}>
						O projekcie
					</Link>
					<Link
						activeClass="active"
						to="eco"
						spy={true}
						smooth={true}
						duration={200}
						href="#eco"
						onClick={handleNav}
						className={navItemClass}>
						Ekosystemy
					</Link>
					<Link
						activeClass="active"
						to="contact"
						spy={true}
						smooth={true}
						duration={200}
						href="#contact"
						onClick={handleNav}
						className={navItemClass}>
						Kontakt
					</Link>
					<Link
						activeClass="active"
						// to="./pages/orders.jsx"
						spy={true}
						smooth={true}
						duration={200}
						href="/orders"
						onClick={handleNav}
						className={navItemClass}>
						Zamówienia
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
