import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Actu1Page from "@/components/Actu1Page";
import Actu2Page from "@/components/Actu2Page";
import Actu3Page from "@/components/Actu3Page";
import prisma from "@/server/prisma";

export default function Actus({ all1Actu }) {
	const { query } = useRouter();
	const [content, setContent] = useState(null);

	useEffect(() => {
		switch (query.id) {
			case "1":
				setContent(<Actu1Page props={all1Actu} />);
				break;
			case "2":
				setContent(<Actu2Page />);
				break;
			case "3":
				setContent(<Actu3Page />);
				break;
			default:
				setContent(<div>Strona nie znaleziona</div>);
				break;
		}
	}, [query.id, all1Actu]);

	return <div>{content}</div>;
}

//actus 1 data
export const getServerSideProps = async () => {
	const all1Actu = await prisma.actu.findMany({
		orderBy: { id: "desc" },
		take: 1,
	});

	return {
		props: {
			all1Actu: JSON.parse(JSON.stringify(all1Actu)),
		},
	};
};
