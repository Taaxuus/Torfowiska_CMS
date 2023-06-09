import Document, { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
	return (
		<Html lang="pl-PL" className="html">
			<Head>
				<meta charSet="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<script
					src="https://kit.fontawesome.com/01ddd1f305.js"
					crossOrigin="anonymous"></script>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300;600;700;900&display=swap"
					rel="stylesheet"
				/>
				<title>Wetlands</title>
				<link rel="icon" type="image/x-icon" href="./img/wet_fav.icon.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default MyDocument;
