import Link from "next/link";

const Navigation = () => {
	// const handleNav = () => {
	// 	nav.classList.toggle("nav--active");

	// 	navBtnBars.classList.remove("black-bars-color");

	// 	allNavItems.forEach((item) => {
	// 		item.addEventListener("click", () => {
	// 			nav.classList.remove("nav--active");
	// 		});
	// 	});

	// 	handleNavItemsAnimation();
	// };

	// const handleNavItemsAnimation = () => {
	// 	let delayTime = 0;

	// 	allNavItems.forEach((item) => {
	// 		item.classList.toggle("nav-items-animation");
	// 		item.style.animationDelay = "." + delayTime + "s";
	// 		delayTime++;
	// 	});
	// };

	return (
		<nav className="nav">
			<div className="nav__items">
				<Link href="/" className="nav__item">
					Strona Główna
				</Link>
				<Link href="#actu" className="nav__item">
					Aktualności
				</Link>
				<Link href="#about" className="nav__item">
					O projekcie
				</Link>
				<Link href="#eco" className="nav__item">
					Ekosystemy
				</Link>
				<Link href="#contact" className="nav__item">
					Kontakt
				</Link>
				<Link href="./publiorders.html" className="nav__item">
					Zamówienia
				</Link>
			</div>
		</nav>
	);
};

export default Navigation;
