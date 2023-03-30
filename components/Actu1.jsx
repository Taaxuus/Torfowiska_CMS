import Link from "next/link";

const Actu1 = () => {
	return (
		<>
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
							bioróżnorodności funkcji terenów podmokłych, torfowisk i bagien na
							terenach sieci Natura 2000 i Zielonej Infrastruktury.
						</li>
					</ul>
					<button className="actu__card-info-btn btn-special-animation">
						<Link href="/actus/1">Czytaj więcej</Link>
					</button>
				</div>
			</div>
		</>
	);
};
export default Actu1;
