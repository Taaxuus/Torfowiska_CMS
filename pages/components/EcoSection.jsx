import Eco1 from "./Eco1";
import Eco2 from "./Eco2";
import Eco3 from "./Eco3";

const EcoSection = () => {
	return (
		<section className="eco section-padding section white-section " id="eco">
			<div className="wrapper">
				<h2 className="section-heading">Ekosystemy objęte programem</h2>
				<Eco1 />
				<Eco2 />
				<Eco3 />
			</div>
		</section>
	);
};

export default EcoSection;
