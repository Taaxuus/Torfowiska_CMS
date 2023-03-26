import { useState } from "react";

const Header = () => {
	const [contrastBtn, setContrastBtn] = useState(false);
	const [contrastStyles, setContrastStyles] = useState("");

	const handleContrastBtn = () => {
		setContrastBtn((prevState) => !prevState);
		setContrastStyles((prevState) =>
			prevState === "" ? "contrast-styles" : ""
		);
	};

	return (
		<header id="header" className={`header section ${contrastStyles}`}>
			<button onClick={handleContrastBtn} className="contrast-box"></button>
			<video
				id="videoPlayer"
				src="./video/Final_bg_video.mp4"
				autoPlay
				loop
				muted
				poster="./img/poster.heading.png"></video>
			<div className="header__logo--box">
				<a
					href="https://www.gov.pl/web/nfosigw/program-life"
					target="_blank"
					className="header__logo header__logo--1"></a>
				<a
					href="https://natura2000.gdos.gov.pl/"
					target="_blank"
					className="header__logo header__logo--2"></a>
				<a
					href="https://www.gov.pl/web/nfosigw"
					target="_blank"
					className="header__logo header__logo--3"></a>
			</div>
			<h1 className="header__heading">Wetlands Green Life</h1>
			<p className="header__text">
				"Odtworzenie oraz zachowanie obszarów bagiennych, torfowisk i terenów
				podmokłych na obszarach Natura 2000 i Zielonej Infrastruktury"
				<br />
				<br />
				Program prowadzony przez Biuro Urządzania Lasu i Geodezji Leśnej we
				współpracy z Generalną Dyrekcją Ochrony Środowiska oraz Uniwersytetem
				Rolniczym w Krakowie.
				<br />
			</p>
			<div className="header__text--infobox">
				<p className="header__text">Wartość projektu: 35 943 586.95 € &nbsp;</p>
				<p className="header__text">
					Udział Komisji Europejskiej: 21 566 152.17 €&nbsp;
				</p>
				<p className="header__text">Udział NFOŚiGW: 12 580 255.00 € &nbsp;</p>
				<br />
				<p className="header__text">
					Czas trwania projektu: 01 grudzień 2022 r. - 30 listopad 2032 r.
				</p>
			</div>
			<div className="header__logos--box">
				<a href="https://www.buligl.pl/" target="_blank">
					<img
						src="./img/logo_buligl.svg"
						alt="logo_buligl"
						className="logo__2"
					/>
				</a>
				<a href="https://www.gov.pl/web/gdos" target="_blank">
					<img
						src="./img/GDOS_logo_poziom_biel_png.png"
						alt="logo_gdos"
						className="logo__1"
					/>
				</a>
				<a href="https://bpir.urk.edu.pl/" target="_blank">
					<img
						src="./img/ur_krk_white-removebg-preview.png"
						alt="logo_ur_krk"
						className="logo__3"
					/>
				</a>
			</div>
			<a href="#actu" className="header__btn btn-special-animation">
				Aktualności
			</a>
		</header>
	);
};

export default Header;
