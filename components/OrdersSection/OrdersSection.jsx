import Link from "next/link";
const OrdersSection = ({ orders }) => {
	return (
		<section className="public-orders section" id="publicorders">
			<div className="header__logo--box">
				<Link
					href="https://www.gov.pl/web/nfosigw/program-life"
					target="_blank"
					className="header__logo header__logo--1"></Link>
				<Link
					href="https://natura2000.gdos.gov.pl/"
					target="_blank"
					className="header__logo header__logo--2"></Link>
				<Link
					href="https://www.gov.pl/web/nfosigw"
					target="_blank"
					className="header__logo header__logo--3"></Link>
			</div>
			<div className="contrast-box"></div>
			<p className="public-orders__title">Zamówienia</p>
			<div className="wrapper">
				<table className="public-orders__table">
					<thead>
						<tr>
							<th>Lp.</th>
							<th>Przedmiot zamówienia</th>
							<th>Pliki do pobrania</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order, index) => (
							<tr className="public-orders__order" key={order.id}>
								<td>{index + 1}.</td>
								<td>{order.orderName}</td>
								<td className="download-box">
									<a
										className="btn-download"
										href={order.filesFolderUrl}
										download>
										<i className={`fa-solid fa-file-download`}></i>
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default OrdersSection;
