import Image from "next/image";

const Eco2 = () => {
	return (
		<>
			<div className="eco__box">
				<div className="eco__box-img eco__box-img--right">
					<Image
						src="/img/uzytki_zielone.png"
						alt="Obszary Zielone"
						className="eco__img"
						width={400}
						height={400}
					/>
				</div>
				<div className="eco__box-text eco__box-text--right">
					<h3 className="eco__title">Użytki zielone</h3>
					<p className="eco__text">
						Łąki i inne użytki zielone są kwintesencją krajobrazu Polski. Ich
						stan zależny jest od naszych praktyk gospodarowania. Zaniechanie
						koszenia najczęściej prowadzi do wtórnej sukcesji naturalnej oraz
						pojawiania się inwazyjnych gatunków roślin. Przekształcanie łąk w
						pola uprawne lub intensywnie użytkowane pastwiska oraz ich osuszanie
						są najczęstszymi przyczynami ich degradacji.
					</p>
				</div>
			</div>
		</>
	);
};

export default Eco2;
