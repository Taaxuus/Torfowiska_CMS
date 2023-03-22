import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<script
					src="https://kit.fontawesome.com/01ddd1f305.js"
					crossorigin="anonymous"></script>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300;600;700;900&display=swap"
					rel="stylesheet"
				/>
				<title>Wetlands</title>
				<link rel="icon" type="image/x-icon" href="./img/wet_fav.icon.png" />
			</Head>
			<Nav />
			<Header />
			<Main />
			<Footer />
		</>
	);
}
