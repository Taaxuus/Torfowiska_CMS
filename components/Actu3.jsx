import Link from "next/link";

const Actu3 = () => {
	return (
		<>
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
							Z okazji 52. rocznicy Konwencji Ramsarskiej, w dniach 5-7 lutego
							2023 w Warszawie miała miejsce konferencja „Pakt dla Mokradeł”.
							Wetlands Green Life reprezentował koordynator projektu Przemysław
							Musiał z Biura Urządzania Lasu i Geodezji Leśnej.
						</li>
					</ul>
					<button className="actu__card-info-btn btn-special-animation">
						<Link href="/actus/[id]" as="/actus/3">
							Czytaj więcej
						</Link>
					</button>
				</div>
			</div>
		</>
	);
};
export default Actu3;
