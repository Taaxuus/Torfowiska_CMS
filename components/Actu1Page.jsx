import Navigation from "./PageStaticElements/Nav";
import Footer from "./PageStaticElements/Footer";
import Link from "next/link";

const Actu1Page = () => {
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
					<p className="actus__title">Wetlands Green Life</p>
					<h3 className="actus__subtitle">
						W dniu 1 grudnia 2022 oficjalnie rozpoczął się projekt odtwarzania,
						ochrony i przywracania kluczowych dla klimatu i bioróżnorodności
						funkcji terenów podmokłych, torfowisk i bagien na terenach sieci
						Natura 2000 i Zielonej Infrastruktury.
					</h3>

					<img
						src="./img/actu_actu_1inside.png"
						alt="bagna"
						className="actus__img"
					/>

					<p className="actus__content__text">
						Wetlands Green Life to strategiczna inicjatywa finansowana ze
						środków programu LIFE oraz Narodowego Funduszu Ochrony Środowiska i
						Gospodarki Wodnej, mająca na celu odtworzenie oraz zachowanie
						obszarów bagiennych, torfowisk i terenów podmokłych na obszarach
						Natura 2000 i Zielonej Infrastruktury. Program będzie realizowany
						przez Biuro Urządzania Lasu i Geodezji Leśnej we współpracy z
						Generalną Dyrekcją Ochrony Środowiska oraz Uniwersytetem Rolniczym w
						Krakowie.
					</p>
					<p className="actus__content__text">
						Według aktualnych szacunków, bagna, torfowiska i obszary podmokłe
						zajmują około 1,4 miliona hektarów powierzchni Polski, z czego ponad
						350 tysięcy hektarów znajduje się na obszarach chronionych Natura
						2000. Raport z wdrażania Dyrektywy Siedliskowej stan większości z
						nich ocenia jako niezadowalający bądź zły. Stan terenów podmokłych
						znajdujących się poza obszarami Natura 2000 nie jest znany i wymaga
						identyfikacji oraz opisu. Te niezinwentaryzowane dotychczas tereny
						zostały na potrzeby projektu nazwane obszarami Zielonej
						Infrastruktury. W ich skład wchodzą między innymi korytarze
						ekologiczne znajdujące się w bezpośrednim sąsiedztwie terenów
						podmokłych objętych ochroną. Włączenie do programu Wetlands Green
						Life obszarów Zielonej Infrastruktury jest warunkiem koniecznym do
						kompleksowej poprawy stanu bagien, torfowisk i terenów podmokłych.
					</p>
					<p className="actus__content__text">
						Projekt obejmie wszystkie siedliska torfowisk, bagien i terenów
						podmokłych na terenie Polski ujęte w Załączniku I Dyrektywy
						Siedliskowej, tj.:
					</p>
					<p className="actus__content__text">
						Bagna, torfowiska i inne obszary podmokłe:
					</p>
					<ul>
						<li>Śródlądowe błotniste solniska z solirodkiem (1310)</li>
						<li>Torfowiska wysokie z roślinnością torfotwórczą (7110)</li>
						<li>
							Torfowiska wysokie, zdegradowane, lecz zdolne do naturalnej i
							stymulowanej regeneracji (7120)
						</li>
						<li>Torfowiska przejściowe i trzęsawiska (7140)</li>
						<li>
							Obniżenia na podłożu torfowym z roślinnością ze związku
							Rhynchosporion (7150)
						</li>
						<li>Torfowiska nakredowe (7210)</li>
						<li>
							Źródliska wapienne ze zbiorowiskami Cratoneurion commutati (7220)
						</li>
						<li>
							Górskie i nizinne torfowiska zasadowe o charakterze młak,
							turzycowisk i mechowisk (7230)
						</li>
					</ul>

					<p className="actus__content__text">Użytki zielone:</p>

					<ul>
						<li>
							Solniska nadmorskie (Glauco-Puccinellietalia maritimae, część –
							zbiorowiska nadmorskie) (1330)
						</li>
						<li>
							Śródlądowe słone łąki, pastwiska i szuwary
							(Glauco-Puccinellietalia, część – zbiorowiska śródlądowe) (1340)
						</li>
						<li>
							Torfowiska wysokie, zdegradowane, lecz zdolne do naturalnej i
							stymulowanej regeneracji (7120)
						</li>
						<li>Zmiennowilgotne łąki trzęślicowe (6410)</li>
						<li>Ziołorośla górskie i ziołorośla nadrzeczne (6430)</li>
						<li>Łąki selernicowe (6440)</li>
						<li>Ekstensywnie użytkowane niżowe łąki świeże (6510)</li>
					</ul>

					<p className="actus__content__text">Siedliska leśne:</p>

					<ul>
						<li>Bory i lasy bagienne (91D0)</li>
						<li>Łęgi wierzbowe, topolowe, olszowe i jesionowe (91E0)</li>
						<li>Łęgowe lasy dębowo-wiązowo-jesionowe (91F0)</li>
					</ul>

					<p className="actus__content__text">
						Dodatkowo projekt obejmie torfowiska nieujęte w Załączniku I
						Dyrektywy Siedliskowej będące miejscem bytowania rzadkich gatunków
						roślin i zwierząt.
					</p>

					<p className="actus__content__text">
						Zaplanowane w ramach projektu Wetlands Green Life kierunki działań
						obejmą między innymi renaturyzację i odtwarzanie zdegradowanych
						siedlisk przyrodniczych przy jednoczesnym wzmacnianiu zagrożonych
						populacji flory i fauny, konserwację i właściwe utrzymanie oraz
						odtworzenie urządzeń regulujących stan wody, oraz powstrzymanie
						naturalnej sukcesji na siedliskach nieleśnych. Ponadto prowadzone
						będą prace mające na celu przywrócenie lub polepszenie reżimu
						hydrologicznego i zwiększenie zdolności retencyjnych siedlisk
						leśnych i nieleśnych, określenie zasad gospodarowania w strefach
						buforowych wokół cennych siedlisk bagien, torfowisk i terenów
						podmokłych, oraz opracowanie kart informacyjnych z określeniem stanu
						tych siedlisk na obszarach Zielonej Infrastruktury nieobjętych
						siecią Natura 2000 i przypisanie dla nich działań ochronnych lub
						naprawczych.
					</p>
					<p className="actus__content__text">
						Wśród najważniejszych efektów działań przeprowadzonych w ramach
						ochrony czynnej planuje się doprowadzić do podniesienia zwierciadła
						wód gruntowych oraz stabilizacji jego poziomu, oraz przywrócenia
						naturalnego reżimu wodnego, który powstrzyma procesy murszenia i na
						nowo uruchomi naturalny proces torfotwórczy. Podjęte działania mają
						doprowadzić do odtworzenia roślinności torfotwórczej, wzrostu
						liczebności roślin diagnostycznych siedlisk przyrodniczych, wzrostu
						wskaźników różnorodności biologicznej oraz poprawy właściwości
						chemicznych wód do stanu umożliwiającego zachowanie trwałości
						torfowisk, bagien oraz terenów podmokłych.
					</p>

					<p className="actus__content__text">
						Niezwykle istotnym elementem programu Wetlands Green Life jest jego
						aspekt edukacyjny. Przybliżenie zagadnień związanych z ochroną i
						odtwarzaniem bioróżnorodności bagiennej flory i fauny oraz funkcji,
						jaką tereny podmokłe pełnią w obliczu zmian klimatycznych, ma
						charakter priorytetowy. Plany przewidują między innymi realizację
						ogólnodostępnych filmów o tematyce przyrodniczej, które będą
						prezentowane podczas spotkań plenerowych oraz na platformach
						streamingowych. Równie istotnym elementem będzie wykorzystanie
						technologii mobilnych i dedykowane aplikacje oraz inne nowoczesne
						rozwiązania umożliwiające dotarcie z przekazem projektu do jak
						najszerszego grona odbiorców.
					</p>

					<p className="actus__content__text">
						Budżet projektu przewiduje również finansowanie dla inicjatyw
						oddolnych i lokalnych związanych z polepszeniem stanu bagien i
						torfowisk, dlatego już dziś zapraszamy do współpracy organizacje
						pozarządowe, samorządy oraz wszystkich tych, którym los polskich
						mokradeł nie jest obojętny. Okres realizacji wszystkich prac i
						działań składających się na projekt Wetlands Green Life przewidziany
						jest na 10 lat.
					</p>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Actu1Page;
