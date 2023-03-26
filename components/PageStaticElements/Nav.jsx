// import Link from "next/link";
import { useState } from "react";
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
						href="./"
						scroll={false}
						onClick={handleNav}
						className={navItemClass}>
						Strona Główna
					</Link>
					<Link
						href="./#actu"
						scroll={false}
						onClick={handleNav}
						className={navItemClass}>
						Aktualności
					</Link>

					<Link
						href="./#about"
						scroll={false}
						onClick={handleNav}
						className={navItemClass}>
						O projekcie
					</Link>
					<Link
						href="./#eco"
						scroll={false}
						onClick={handleNav}
						className={navItemClass}>
						Ekosystemy
					</Link>
					<Link
						href="./#contact"
						scroll={false}
						onClick={handleNav}
						className={navItemClass}>
						Kontakt
					</Link>
					<Link
						href="/orders"
						scroll={false}
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
