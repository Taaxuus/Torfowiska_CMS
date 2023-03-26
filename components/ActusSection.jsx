import Actu1 from "./Actu1";
import Actu2 from "./Actu2";
import Actu3 from "./Actu3";

const Actus = () => {
	return (
		<>
			<section
				className="actu section-padding section white-section "
				id="actu">
				<div className="wrapper">
					<h2 className="section-heading">Aktualności</h2>

					<div className="actu__cards">
						<Actu1 />
						<Actu2 />
						<Actu3 />
					</div>
				</div>
			</section>
		</>
	);
};

export default Actus;
