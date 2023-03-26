import Link from "next/link";
import { useState } from "react";
import Actus from "../ActusSection";
import About from "../About";
import EcoSection from "./EcoSection";
const Main = () => {
	return (
		<>
			<Actus />
			<About />
			<EcoSection />
		</>
	);
};

export default Main;
