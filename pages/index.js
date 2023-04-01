import MainPage from "../components/MainPage";
import prisma from "@/server/prisma";

export default function Home({ all1Actu }) {
	return (
		<>
			<MainPage />
		</>
	);
}

export const getServerSideProps = async () => {
	const all1Actu = await prisma.actu.findMany();

	return {
		props: {
			allActu: JSON.parse(JSON.stringify(all1Actu)),
		},
	};
};
