import Navigation from "./Nav";
import Footer from "./Footer";
import Link from "next/link";

const Actu3Page = () => {
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
					<p className="actus__title">Pakt dla Mokradeł</p>
					<h3 className="actus__subtitle">
						Z okazji 52. rocznicy Konwencji Ramsarskiej, w dniach 5-7 lutego
						2023 w Warszawie miała miejsce konferencja „Pakt dla Mokradeł”.
						Wetlands Green Life reprezentował koordynator projektu Przemysław
						Musiał z Biura Urządzania Lasu i Geodezji Leśnej.
					</h3>

					<img
						src="./img/Frozen-bamboo-island-898648.png"
						alt="bagna"
						className="actus__img"
					/>

					<p className="actus__content__text">
						Konwencja o obszarach wodno-błotnych mających znaczenie
						międzynarodowe, zwłaszcza jako środowisko życiowe ptactwa wodnego,
						została sporządzona 2.2.1971 r. w miejscowości Ramsar w Iranie.
						Polska przystąpiła do konwencji w roku 1978. Od roku 1997, w
						rocznicę uchwalenia Konwencji Ramsarskiej na świecie obchodzony jest
						Międzynarodowy Dzień Mokradeł. Dzień ten, co roku obchodzony jest
						pod innym hasłem. Tegorocznym obchodom towarzyszyło hasło „Już czas
						na przywrócenie mokradeł”.
					</p>
					<p className="actus__content__text">
						Zorganizowana przez Centrum Ochrony Mokradeł i Wydział Biologii
						Uniwersytetu Warszawskiego konferencja „Pakt dla Mokradeł” była
						okazją do spotkania się dla osób na co dzień zajmujących się
						mokradłami. Zakres konferencji obejmował całe zróżnicowanie terenów
						podmokłych Polski: od bagien i torfowisk przez rzeki i jeziora po
						wybr/zeże Bałtyku. Ponad 350 naukowców, przedstawicieli organizacji
						pozarządowych, instytucji państwowych, wojska, organów
						administracji, samorządowców, leśników, przedsiębiorców i artystów
						dyskutowało o ekologii, paleoekologii, ochronie i restytucji bagien
						i torfowisk.
					</p>

					<p className="actus__content__text">
						Na sesji plenarnej konferencji z prezentacją omawiającą główne
						założenia projektu Wetlands Green Life wystąpił Przemysław Musiał,
						koordynator projektu. Nagranie tego, jak i pozostałych wystąpień
						dostępne jest na Facebooku &amp;
						<Link
							href="https://www.facebook.com/people/bagnapl/100064239117036/"
							target="_blank">
							Centrum Ochrony Mokradel
						</Link>
					</p>

					<p className="actus__content__text">
						Konferencja zakończyła się przyjęciem przez aklamację wspólnej
						deklaracji:
					</p>

					<br />

					<i>
						<p className="actus__content__text">
							Ekosystemy mokradłowe, takie jak bagna, torfowiska, rzeki, czy
							jeziora, są kluczowym elementem przyrody, a ich ochrona i
							odtwarzanie są niezbędne dla powstrzymania globalnego kryzysu
							klimatyczno-ekologicznego, a także dla zapewnienia bezpiecznej
							przyszłości ludzi i trwałego dostępu do zasobów środowiska.
						</p>
						<br />

						<p className="actus__content__text">
							Mokradła zajmowały ok. 18% powierzchni Polski, ale niemal
							wszystkie, w efekcie degradacji, przestały spełniać niegdysiejsze
							funkcje ekosystemowe. Wskutek melioracji około 85% torfowisk
							straciło cechy ekosystemów bagiennych, zmieniając się z
							pochłaniaczy dwutlenku węgla w źródła jego emisji do atmosfery.
							Około 80% rzek ma, wskutek regulacji i dopływu zanieczyszczeń,
							znacząco pogorszony stan ekologiczny, co upośledziło ich zdolności
							samooczyszczania i zniszczyło różnorodność siedlisk. Również stan
							lub potencjał ekologiczny ponad 80% jezior jest gorszy niż dobr/y.
							Gatunki związane z mokradłami dominują w Polskich Czerwonych
							Księgach fauny i flory, należąc do najszybciej ginących.
						</p>
						<br />

						<p className="actus__content__text">
							Mimo że dotychczasowe projekty odtwarzania mokradeł prowadzone w
							Polsce i za granicą dostarczyły niezbędnej wiedzy naukowej i
							technicznej, skala przestrzenna i liczba zrealizowanych projektów
							jest nieproporcjonalnie mała w stosunku do potrzeb. Jednocześnie
							ochrona i restytucja mokradeł są coraz częściej przywoływane przez
							różne środowiska jako działania niezbędne dla przeciwdziałania
							suszom i powodziom, ochrony jakości wód, ograniczenia skutków
							zmian klimatu, a także poprawy obr/onności kraju. Również nowe
							akty prawne Unii Europejskiej – „Strategia bioróżnorodności” oraz
							„Prawo o przywracaniu przyrody” – wymagają od nas natychmiastowego
							zwiększenia efektywności ochrony i restytucji mokradeł. Aby
							wdrożyć te plany, potrzebujemy dziś współpracy różnych środowisk
							ponad wszelkimi podziałami.
						</p>
						<br />

						<p className="actus__content__text">
							Jako uczestnicy konferencji „Pakt dla Mokradeł” wyrażamy potrzebę
							i wolę współdziałania na rzecz:
						</p>
						<br />

						<p className="actus__content__text">
							1. Uznania ochrony i odtwarzania mokradeł za działania kluczowe
							dla adaptacji do zmian klimatu i ich ograniczania oraz
							powstrzymania wymierania gatunków, i wdrożenia adekwatnych działań
							w różnych sektorach polityki Państwa,
						</p>
						<br />

						<p className="actus__content__text">
							2. Współpracy naukowców różnych dziedzin i dyscyplin naukowych w
							planowaniu oraz realizacji ochrony i odtwarzania mokradeł, a także
							stworzenia systemu monitoringu ich stanu ekologicznego oraz oceny
							funkcji ekosystemowych,
						</p>
						<br />
						<p className="actus__content__text">
							3. Współpracy między instytucjami administracji publicznej a
							naukowcami i praktykami ochrony przyrody, aby poprawić istniejące
							i wypracować nowe skuteczne instrumenty prawne, administracyjne i
							finansowe wspierające przyrodę mokradeł,
						</p>
						<br />

						<p className="actus__content__text">
							4. Stworzenia ram prawno-organizacyjnych wspomagających
							zaangażowanie sektora prywatnego w odtwarzanie mokradeł, a w
							szczególności restytucję zdegradowanych torfowisk w ramach
							kompensowania emisji gazów cieplarnianych,
						</p>
						<br />

						<p className="actus__content__text">
							5. Wypracowania nowych zasad gospodarowania glebami torfowymi w
							sektorze rolniczym i leśnym, takich jak paludikultura, aby
							zminimalizować emisje gazów cieplarnianych i przywrócić utracone
							funkcje ekosystemowe, takie jak retencja i oczyszczanie wód,
						</p>
						<br />

						<p className="actus__content__text">
							6. Ograniczenia wydobycia i stosowania torfu w przemyśle
							ogrodniczym i innych sektorach,
						</p>
						<br />
						<p className="actus__content__text">
							7. Rewizji dotychczasowego podejścia do formalnej ochrony mokradeł
							na obszarach chronionych w celu zwiększenia jej efektywności i
							zapobieżenia błędnym decyzjom administracyjnym,
						</p>
						<br />
						<br />
						<p className="actus__content__text">
							8. Objęcia skuteczną ochroną mokradeł dobr/ze zachowanych oraz
							opracowania i wdrożenia krajowego planu restytucji przyrodniczej
							mokradeł zdegradowanych w celu przywracania przyrody i odtwarzania
							utraconych usług ekosystemowych, w tym funkcji strategicznych w
							zakresie obr/onności kraju,
						</p>
						<br />
						<p className="actus__content__text">
							9. Skutecznej i powszechnej edukacji społeczeństwa w zakresie roli
							mokradeł w przyrodzie i naszym życiu, a także potrzeb i metod ich
							odtwarzania,
						</p>
						<br />
						<p className="actus__content__text">
							10. Wzmocnienia współpracy międzynarodowej polskich naukowców,
							praktyków i decydentów w zakresie ochrony i przywracania mokradeł,
							w szczególności w zakresie ochrony transgranicznych obszarów
							bagiennych, takich jak region białorusko-ukraińsko-polskiego
							Polesia.
						</p>
						<br />
						<br />
						<p className="actus__content__text">Warszawa, 7 lutego 2023</p>
						<br />
					</i>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Actu3Page;
