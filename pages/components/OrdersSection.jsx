import Order1 from "./Order1";
import Order2 from "./Order2";
const OrdersSection = () => {
	return (
		<section className="public-orders section" id="publicorders">
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
			<div className="contrast-box"></div>
			<p className="public-orders__title">Zamówienia</p>
			<div className="wrapper">
				<table className="public-orders__table">
					<tr>
						<th>Lp.</th>
						<th>Przedmiot zamówienia</th>
						<th>Pliki do pobrania</th>
					</tr>
					<Order1 />
					<Order2 />
				</table>
			</div>
		</section>
	);
};

export default OrdersSection;
