import Image from "next/image";

const Eco1 = () => {
	return (
		<>
			<div className="eco__box">
				<div className="eco__box-img">
					<Image
						src="/img/bagna_torfowiska.png"
						className="eco__img"
						width={600}
						height={400}
					/>
				</div>
				<div className="eco__box-text">
					<h3 className="eco__title">
						Bagna, torfowiska i inne obszary podmokłe
					</h3>
					<p className="eco__text">
						Torfowiska to najszybciej zanikające ekosystemy świata. Ocena stanu
						terenów podmokłych jest na ogół zła lub niezadowalająca. Podstawowym
						zagrożeniem dla ich istnienia są zmiany warunków hydrologicznych
						spowodowane niewłaściwie przeprowadzoną melioracją. Aby spełniać
						swoją funkcję i trwać, bagno musi być mokre. Równie dewastujący
						wpływ na obszary podmokłe ma eksploatacja torfu.
					</p>
				</div>
			</div>
		</>
	);
};

export default Eco1;
