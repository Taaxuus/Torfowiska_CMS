import Link from "next/link";

const Actus = ({ props }) => {
	const actu1 = props[1];
	const actu2 = props[2];
	const actu3 = props[0];

	console.log(actu1);
	console.log(actu2);
	console.log(actu3);
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
								<h3
									dangerouslySetInnerHTML={{ __html: actu1.title }}
									className="actu__card-img-title"></h3>

								<p className="actu__card-img-info">
									<i className="fas fa-angle-double-right"></i>Więcej informacji
								</p>
							</div>
							<div className="actu__card-info">
								<h3
									dangerouslySetInnerHTML={{ __html: actu1.title }}
									className="actu__card-info-title"></h3>
								<ul className="actu__card-info-list">
									<li
										dangerouslySetInnerHTML={{ __html: actu1.subtitle }}
										className="actu__card-info-list-item"></li>
								</ul>
								<button className="actu__card-info-btn btn-special-animation">
									<Link href="/actus/[id]" as="/actus/1">
										Czytaj więcej
									</Link>
								</button>
							</div>
						</div>
						<div className="actu__card">
							<div className="actu__card-img actu__card-img--second">
								<h3
									dangerouslySetInnerHTML={{ __html: actu2.title }}
									className="actu__card-img-title"></h3>
								<p className="actu__card-img-info">
									<i className="fas fa-angle-double-right"></i>Więcej informacji
								</p>
							</div>
							<div className="actu__card-info">
								<h3
									dangerouslySetInnerHTML={{ __html: actu2.title }}
									className="actu__card-info-title"></h3>
								<ul className="actu__card-info-list">
									<li
										dangerouslySetInnerHTML={{ __html: actu2.subtitle }}
										className="actu__card-info-list-item"></li>
								</ul>
								<button className="actu__card-info-btn btn-special-animation">
									<Link href="/actus/[id]" as="/actus/2">
										Czytaj wiecej
									</Link>
								</button>
							</div>
						</div>
						<div className="actu__card">
							<div className="actu__card-img actu__card-img--third">
								<h3
									dangerouslySetInnerHTML={{ __html: actu3.title }}
									className="actu__card-img-title"></h3>
								<p className="actu__card-img-info">
									<i className="fas fa-angle-double-right"></i>Więcej informacji
								</p>
							</div>
							<div className="actu__card-info">
								<h3
									dangerouslySetInnerHTML={{ __html: actu3.title }}
									className="actu__card-info-title"></h3>
								<ul className="actu__card-info-list">
									<li
										dangerouslySetInnerHTML={{ __html: actu3.subtitle }}
										className="actu__card-info-list-item"></li>
								</ul>
								<button className="actu__card-info-btn btn-special-animation">
									<Link href="/actus/[id]" as="/actus/3">
										Czytaj więcej
									</Link>
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
