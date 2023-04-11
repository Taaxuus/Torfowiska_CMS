import Header from "./PageStaticElements/Header";
import Nav from "./PageStaticElements/Nav";
import Main from "./PageStaticElements/Main";
import Footer from "./PageStaticElements/Footer";

export default function MainPage({ props }) {
	return (
		<>
			<Nav />
			<Header />
			<Main props={props} />
			<Footer />
		</>
	);
}
