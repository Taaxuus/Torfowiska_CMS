import Link from "next/link";
import Cookie from "./Cookie";
import { useEffect, useState } from "react";
const Footer = () => {
	const [currentYear, setCurrentYear] = useState("");
	useEffect(() => {
		const year = new Date().getFullYear();
		setCurrentYear(year);
	}, []);

	return (
		<>
			<footer className="footer">
				<div className="wrapper">
					<div className="footer__boxes">
						<div className="footer__box">
							<h3 id="contact" className="footer__box-title">
								Kontakt
							</h3>
							<ul className="footer__box-list">
								<li className="footer__box-list-item">
									<p>
										Lider konsorcjum: Przedsiębiorstwo Państwowe Biuro
										Urządzania Lasu i Geodezji Leśnej
									</p>
								</li>
								<li className="footer__box-list-item">
									<p>
										Sękocin Stary <br />
										ul. Leśników 21 <br />
										05-090 Raszyn
									</p>
								</li>
								<li className="footer__box-list-item">
									<p id="contact" className="contact__box--mail">
										e-mail:{" "}
										<Link className="email" href="mailto:biuro@wetlands.pl">
											biuro@wetlands.pl
										</Link>
										<br />
										tel. 22 825 34 23
									</p>
								</li>
							</ul>
						</div>

						<div className="footer__box">
							<h3 className="footer__box-title">
								<i className="fas fa-tree"></i> Wetlands
							</h3>
							<p>
								"Odtworzenie oraz zachowanie obszarów bagiennych, torfowisk i
								terenów podmokłych na obszarach Natura 2000 i Zielonej
								Infrastruktury"
								<br />
								Nr projektu: LIFE21 IPE/PL/069640
							</p>
							<div className="footer__box-social">
								<Link
									href="https://twitter.com/wetlands_pl"
									className="footer__box-link"
									target="_blank">
									<i className="fab fa-twitter-square"></i>
								</Link>

								<Link
									href="https://www.facebook.com/wetlands.green.life"
									className="footer__box-link"
									target="_blank">
									<i className="fab fa-facebook-square"></i>
								</Link>

								<Link
									href="https://www.instagram.com/wetlands_green_life/"
									className="footer__box-link"
									target="_blank">
									<i className="fab fa-instagram"></i>
								</Link>
								<Link
									href="https://www.youtube.com/@wetlands_green_life"
									className="footer__box-link"
									target="_blank">
									<i className="fab fa-youtube"></i>
								</Link>
								<Link
									href="https://www.tiktok.com/@wetlands.pl"
									className="footer__box-link"
									target="_blank">
									<i className="fab fa-tiktok"></i>
								</Link>
							</div>
						</div>
						<div className="footer__box footer__box-desktop">
							<h3 className="footer__box-title">Menu</h3>
							<ul className="footer__box-list">
								<li className="footer__box-list-item">
									<Link href="./#actu">Aktualności</Link>
								</li>
								<li className="footer__box-list-item">
									<Link href="./#about">O projekcie</Link>
								</li>
								<li className="footer__box-list-item">
									<Link href="./#eco">Ekosystemy</Link>
								</li>
								<li className="footer__box-list-item">
									<Link href="./rodo" target="_blank">
										Polityka prywatności &amp; RODO
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr />
				<p className="footer__bottom-text">
					&copy;<span className="footer__year"> {currentYear}</span> Wetlands
					Green Life
				</p>
				<Cookie />
			</footer>
		</>
	);
};

export default Footer;
