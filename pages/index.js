import MainPage from "../components/MainPage";
import prisma from "@/server/prismaDB/prisma";

export default function Home({ allActus }) {
	return (
		<>
			<MainPage props={allActus} />
		</>
	);
}

export async function getServerSideProps() {
	const allActus = await prisma.actu.findMany({});

	return {
		props: {
			allActus: JSON.parse(JSON.stringify(allActus)),
		},
	};
}
