const Order2 = () => {
	return (
		<tr className="public-orders__order">
			<td>2.</td>
			<td>Organizacja konferencji inauguracyjnej dla 200 uczestników.</td>
			<td className="download-box">
				<ul className="ul-list">
					<li>
						<a
							className="btn-download"
							href="./files/order_2/Zapytanie ofertowe na organizację konferencji.pdf"
							download>
							<i className="fa-solid fa-file-pdf"></i>Zapytanie ofertowe
						</a>
					</li>
					<li>
						<a
							className="btn-download"
							href="./files/order_2/Załącznik nr 1 - Formularz ofertowy.docx"
							download>
							<i className="fa-solid fa-file-word"></i>Załącznik nr 1 –
							Formularz ofertowy
						</a>
					</li>
					<li>
						<a
							className="btn-download"
							href="./files/order_2/Załącznik nr 2 - wykaz zrealizowanych zamówień (2).docx"
							download>
							<i className="fa-solid fa-file-word"></i>Załącznik nr 2 – Wykaz
							zrealizowanych zamówień
						</a>
					</li>
					<li>
						<a
							className="btn-download"
							href="./files/order_2/Załącznik nr 3 - wykaz osób, skierowanych przez Wykonawcę do realizacji za...ienia.docx"
							download>
							<i className="fa-solid fa-file-word"></i>Załącznik nr 3 – Wykaz
							osób
						</a>
					</li>
					<li>
						<a
							className="btn-download"
							href="./files/order_2/Załacznik nr 4 - RODO.pdf"
							download>
							<i className="fa-solid fa-file-pdf"></i>Załącznik nr 4 – Klauzula
							RODO
						</a>
					</li>
				</ul>
			</td>
		</tr>
	);
};

export default Order2;
