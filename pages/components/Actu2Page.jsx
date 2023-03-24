import Navigation from "./Nav";
import Footer from "./Footer";
import Link from "next/link";

const Actu2Page = () => {
	return (
		<>
			<Navigation />
			<section className="actus section" id="actu1">
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
				<div className="actus__content">
					<p className="actus__title">
						Rola mokradeł w obliczu zmian klimatycznych
					</p>
					<h3 className="actus__subtitle">
						Bagna są niczym gąbka, która w zależności od potrzeb pochłania, lub
						oddaje wodę, filtruje ją i utrzymuje jej optymalny poziom,
						zapobiegając tym samym suszom i powodziom. Osuszone torfowisko nie
						tylko przestaje być cennym magazynem węgla, lecz staje się groźnym
						źródłem jego emisji.
					</h3>

					<img src="./img/actu_2.jpg" alt="bagna" className="actus__img" />

					<p className="actus__content__text">
						Tereny podmokłe, torfowiska i bagna odgrywają pierwszoplanową rolę w
						kształtowaniu klimatu. Wpływ ich stanu na zjawiska klimatyczne ma
						wymiar zarówno globalny, jak i lokalny. Globalny, ze względu na ich
						udział w procesach obiegu i magazynowania węgla. Lokalny, ze względu
						na ich znaczenie dla obiegu wody w środowisku.
					</p>
					<p className="actus__content__text">
						Prawidłowo funkcjonujące, zachowane w naturalnym stanie torfowisko,
						jest w stanie zmagazynować ponad dwukrotnie więcej dwutlenku węgla
						niż las o tej samej powierzchni. Co więcej, uwięziony w bagnie
						węgiel może tam pozostać przez tysiące lat. Dlatego właśnie tereny
						podmokłe oferują nam wspaniały, naturalny sposób, na wyłączenie z
						obiegu znacznej części dwutlenku węgla, który nasze samochody,
						fabryki i elektrociepłownie codziennie emitują do atmosfery. Jest
						jednak pewien problem. Kiedy zaczynamy torfowiska osuszać, wydobywać
						torf, nie tylko tracą one swoją zbawienną funkcję magazynów węgla,
						nie tylko przestają być domem dla unikalnych gatunków roślin i
						zwierząt, lecz przeistaczają się w równie groźne źródła emisji gazów
						cieplarnianych, co wymienione powyżej zdobycze cywilizacji.
					</p>
					<p className="actus__content__text">
						W skali lokalnej tereny podmokłe są niezwykle ważnym czynnikiem
						stabilizującym obieg wody między atmosferą a lądem. Ich zdolność do
						akumulowania wody z obfitych opadów oraz do oddawania jej podczas
						suszy jest nieoceniona. Wzrastająca temperatura i coraz częstsze
						okresy suszy, potrafią mieć druzgocący wpływ na produkcję żywności.
						Jednocześnie brak naturalnych rozlewisk i uregulowane koryta rzek,
						zwiększają prawdopodobieństwo powodzi, niosącej ze sobą olbrzymie
						straty materialne, a nie rzadko zagrażającej naszemu życiu.
					</p>

					<p className="actus__content__text">
						W świetle tych faktów, szacunki mówiące o tym, że w Polsce osuszono
						już około 90% wszystkich terenów podmokłych, aby wykorzystać je w
						rolnictwie, lub w inny sposób zagospodarować, nie brzmią
						optymistycznie.
					</p>

					<p className="actus__content__text">
						Program Wetlands Green Life powstał właśnie po to, by przywrócić
						mokradła do ich dawnej funkcji, i dać nam wszystkim szansę
						uniknięcia ekologicznej katastrofy.
					</p>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Actu2Page;
