import { useState, useEffect } from "react";
const Cookie = () => {
	const [cookieDisplay, setCookieDisplay] = useState("block");

	useEffect(() => {
		if (localStorage.getItem("cookiesAccepted")) {
			setCookieDisplay("none");
		}
	}, []);

	const handleCookie = () => {
		localStorage.setItem("cookiesAccepted", true);
		setCookieDisplay("none");
	};

	return (
		<>
			<div id="cookie-consent" style={{ display: cookieDisplay }}>
				<p>
					Od 25 maja 2018 r. wszystkie podmioty przetwarzające dane osobowe,
					zobowiązane są do stosowania Rozporządzenia Parlamentu Europejskiego i
					Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
					fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
					swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
					(Rozporządzenie ogólne o ochronie danych, zwane dalej: RODO). Ponieważ
					bezpieczeństwo Pani/Pana danych osobowych jest dla nas priorytetem,
					zaktualizowaliśmy nasze zapisy o ochronie danych osobowych w celu
					dostosowania ich do RODO, aby móc w pełni chronić prywatność naszych
					klientów, wykorzystywać ich dane wyłącznie we właściwy sposób oraz
					zapewnić im możliwość dalszego korzystania z naszych usług na takich
					samych zasadach jak dotychczas.
				</p>
				<button onClick={handleCookie} id="accept-cookies">
					Zgadzam się
				</button>
			</div>
		</>
	);
};

export default Cookie;
