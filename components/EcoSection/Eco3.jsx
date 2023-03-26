import Image from "next/image";

const Eco3 = () => {
	return (
		<>
			<div className="eco__box">
				<div className="eco__box-img">
					<Image
						src="/img/siedliska_lesnie.png"
						alt="Siedliska lesne"
						className="eco__img"
						width={600}
						height={400}
					/>
				</div>

				<div className="eco__box-text">
					<h3 className="eco__title">Siedliska leśne</h3>
					<p className="eco__text">
						Bory i lasy bagienne, łęgi i lasy łęgowe są nierozerwalnie związane
						z rzekami wzdłuż, których rosną. Kondycja tych siedlisk w
						największym stopniu zależy więc od stanu rzek i zbiorników
						śródlądowych. Regulacje koryta, zaburzanie rytmu zalewów i zabudowa
						dolin rzecznych to tylko niektóre elementy gospodarki wodnej,
						przyczyniające się do rozwoju gatunków inwazyjnych i coraz gorszego
						stanu tych wyjątkowych ekosystemów.
					</p>
				</div>
			</div>
		</>
	);
};

export default Eco3;
