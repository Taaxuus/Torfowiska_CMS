const Actus = () => {
	return (
		<>
			<section
				className="actu section-padding section white-section "
				id="actu">
				<div className="wrapper">
					<h2 className="section-heading">Aktualności</h2>

					<div className="actu__cards">
						<div className="actu__card">
							<div className="actu__card-img actu__card-img--first">
								<h3 className="actu__card-img-title">Wetlands Green Life</h3>
								<p className="actu__card-img-info">
									<i className="fas fa-angle-double-right"></i>Więcej informacji
								</p>
							</div>
							<div className="actu__card-info">
								<h3 className="actu__card-info-title">Wetlands Green Life</h3>
								<ul className="actu__card-info-list">
									<li className="actu__card-info-list-item">
										W dniu 1 grudnia 2022 oficjalnie rozpoczął się projekt
										odtwarzania, ochrony i przywracania kluczowych dla klimatu i
										bioróżnorodności funkcji terenów podmokłych, torfowisk i
										bagien na terenach sieci Natura 2000 i Zielonej
										Infrastruktury.
									</li>
								</ul>
								<button className="actu__card-info-btn btn-special-animation">
									<a href="./actu_1.html">Czytaj wiecej</a>
								</button>
							</div>
						</div>
						<div className="actu__card">
							<div className="actu__card-img actu__card-img--second">
								<h3 className="actu__card-img-title">
									Rola mokradeł w obliczu zmian klimatycznych
								</h3>
								<p className="actu__card-img-info">
									<i className="fas fa-angle-double-right"></i>Więcej informacji
								</p>
							</div>
							<div className="actu__card-info">
								<h3 className="actu__card-info-title">
									Rola mokradeł w obliczu zmian klimatycznych
								</h3>
								<ul className="actu__card-info-list">
									<li className="actu__card-info-list-item">
										Bagna są niczym gąbka, która w zależności od potrzeb
										pochłania, lub oddaje wodę, filtruje ją i utrzymuje jej
										optymalny poziom, zapobiegając tym samym suszom i powodziom.
										Osuszone torfowisko nie tylko przestaje być cennym magazynem
										węgla, lecz staje się groźnym źródłem jego emisji.
									</li>
								</ul>
								<button className="actu__card-info-btn btn-special-animation">
									<a href="./actu_2.html">Czytaj wiecej</a>
								</button>
							</div>
						</div>
						<div className="actu__card">
							<div className="actu__card-img actu__card-img--third">
								<h3 className="actu__card-img-title">Pakt dla mokradeł</h3>
								<p className="actu__card-img-info">
									<i className="fas fa-angle-double-right"></i>Więcej informacji
								</p>
							</div>
							<div className="actu__card-info">
								<h3 className="actu__card-info-title">Pakt dla mokradeł</h3>
								<ul className="actu__card-info-list">
									<li className="actu__card-info-list-item">
										Z okazji 52. rocznicy Konwencji Ramsarskiej, w dniach 5-7
										lutego 2023 w Warszawie miała miejsce konferencja „Pakt dla
										Mokradeł”. Wetlands Green Life reprezentował koordynator
										projektu Przemysław Musiał z Biura Urządzania Lasu i
										Geodezji Leśnej.
									</li>
								</ul>
								<button className="actu__card-info-btn btn-special-animation">
									<a href="./actu_3.html">Czytaj więcej</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Actus;
