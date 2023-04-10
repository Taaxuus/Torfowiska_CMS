import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
import EditorActu from "@/components/AdminPanel/EditorActus";
import prisma from "@/server/prismaDB/prisma";

const ACTUALNOSCI = "Actualnosci";

export default function ActusEditor({ allActus }) {
	const router = useRouter();
	const { id } = router.query;

	const [showSubNav, setShowSubNav] = useState(false);

	const handleItemClick = () => {
		setShowSubNav(true);
	};

	const handleSubItemClick = (item) => {
		const currentActu = allActus.find((actu) => actu.id === Number(item));
		setActu(currentActu);
	};

	const [actu, setActu] = useState(null);

	useEffect(() => {
		const currentActu = allActus.find((actu) => actu.id === Number(id));
		setActu(currentActu || null);
	}, [id, allActus]);

	if (!actu) {
		return <div>Stronie nie znaleziona</div>;
	}

	return (
		<div className="admin__panel">
			<nav>
				<ul>
					<li onClick={() => handleItemClick()}>
						{ACTUALNOSCI}
						{showSubNav && (
							<ul>
								{allActus
									.sort((a, b) => a.id - b.id)
									.map((actu) => (
										<li key={actu.id}>
											<a
												href={`/actuseditor/${actu.id}`}
												onClick={() => handleSubItemClick(actu.id)}>
												{`Aktualnosc ${actu.id}`}
											</a>
										</li>
									))}
							</ul>
						)}
					</li>
					<li>
						<Link href={"/ordersEditor"}>Orders</Link>
					</li>
				</ul>
			</nav>
			<EditorActu
				title={actu.title}
				subtitle={actu.subtitle}
				image={actu.image}
				author={actu.author}
				content={actu.content}
				id={actu.id}
			/>
		</div>
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
