import MainPage from "../components/MainPage";
import prisma from "@/prisma";

export default function Home({ allActu }) {
	console.log(allActu);

	return (
		<>
			<MainPage />
		</>
	);
}

export const getServerSideProps = async () => {
	const allActu = await prisma.actu.findMany();

	return {
		props: {
			allActu: JSON.parse(JSON.stringify(allActu)),
		},
	};
};
