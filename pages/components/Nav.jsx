import Link from "next/link";

function Navigation() {
	return (
		<nav className="nav">
			<div className="nav__items">
				<Link href="/">
					<a className="nav__item">Strona Główna</a>
				</Link>
				<Link href="#actu">
					<a className="nav__item">Aktualności</a>
				</Link>
				<Link href="#about">
					<a className="nav__item">O projekcie</a>
				</Link>
				<Link href="#eco">
					<a className="nav__item">Ekosystemy</a>
				</Link>
				<Link href="#contact">
					<a className="nav__item">Kontakt</a>
				</Link>
				<Link href="./publiorders.html">
					<a className="nav__item">Zamówienia</a>
				</Link>
			</div>
		</nav>
	);
}

export default Navigation;
