const Order1 = () => {
	return (
		<tr className="public-orders__order">
			<td>1.</td>
			<td>
				<del>Organizacja konferencji rozpoczynającej projekt dla 200 osób.</del>
				<br />
				UNIEWAŻNIONE
			</td>

			<td className="download-box">
				<ul className="ul-list">
					<li>
						<a
							className="btn-download"
							href="./files/order_1/Informacja o unieważnieniu.docx"
							download>
							<i className="fa-solid fa-file-word"></i>
							INFORMACJA O UNIEWAŻNIENIU POSTĘPOWANIA
						</a>
					</li>
					<li>
						<a
							className="btn-download"
							href="./files/order_1/Zapytanie ofertowe na organizację konferencji.pdf"
							download>
							<i className="fa-solid fa-file-pdf"></i>
							<del>Zapytanie ofertowe</del>
						</a>
					</li>
					<li>
						<a
							className="btn-download"
							href="./files/order_1/Załącznik nr 1 - Formularz ofertowy.docx"
							download>
							<i className="fa-solid fa-file-word"></i>
							<del>Załącznik nr 1 – Formularz ofertowy</del>
						</a>
					</li>
					<li>
						<a
							className="btn-download"
							href="./files/order_1/Załącznik nr 2 - wykaz zrealizowanych zamówień.docx"
							download>
							<i className="fa-solid fa-file-word"></i>
							<del>Załącznik nr 2 – Wykaz zamówień</del>
						</a>
					</li>
					<li>
						<a
							className="btn-download"
							href="./files/order_1/Załącznik nr 3 - wykaz osób, skierowanych przez Wykonawcę do realizacji zamówienia.docx"
							download>
							<i className="fa-solid fa-file-word"></i>
							<del>Załącznik nr 3 – Wykaz osób</del>
						</a>
					</li>
					<li>
						<a
							className="btn-download"
							href="./files/order_1/Załacznik nr 4 - RODO.pdf"
							download>
							<i className="fa-solid fa-file-pdf"></i>
							<del>Załącznik nr 4 – Klauzula RODO</del>
						</a>
					</li>
				</ul>
			</td>
		</tr>
	);
};

export default Order1;
