const Actu2 = () => {
	return (
		<>
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
							Bagna są niczym gąbka, która w zależności od potrzeb pochłania,
							lub oddaje wodę, filtruje ją i utrzymuje jej optymalny poziom,
							zapobiegając tym samym suszom i powodziom. Osuszone torfowisko nie
							tylko przestaje być cennym magazynem węgla, lecz staje się groźnym
							źródłem jego emisji.
						</li>
					</ul>
					<button className="actu__card-info-btn btn-special-animation">
						<a href="./actu_2.html">Czytaj wiecej</a>
					</button>
				</div>
			</div>
		</>
	);
};
export default Actu2;
