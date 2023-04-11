import Actus from "../ActusSection";
import About from "../About";
import EcoSection from "../EcoSection/EcoSection";
const Main = ({ props }) => {
	console.log(props);
	return (
		<>
			<Actus props={props} />
			<About />
			<EcoSection />
		</>
	);
};

export default Main;
