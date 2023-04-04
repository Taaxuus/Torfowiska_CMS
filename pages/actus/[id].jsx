import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ActuPage from "@/components/ActuPage";
import prisma from "@/server/prismaDB/prisma";

export default function Actu({ allActus }) {
	const router = useRouter();
	const { id } = router.query;
	const [actu, setActu] = useState(null);

	useEffect(() => {
		const currentActu = allActus.find((actu) => actu.id === Number(id));
		setActu(currentActu || null);
	}, [id, allActus]);

	if (!actu) {
		return <div>Strona nie znaleziona</div>;
	}

	return <ActuPage props={actu} />;
}

export async function getServerSideProps() {
	const allActus = await prisma.actu.findMany({});

	return {
		props: {
			allActus: JSON.parse(JSON.stringify(allActus)),
		},
	};
}
