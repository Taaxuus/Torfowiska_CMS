import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
import EditorActu from "@/components/AdminPanel/EditorActus";
import prisma from "@/server/prisma";

export default function ActusEditor({ allActus }) {
	//nav Statement
	const [showSubNav, setShowSubNav] = useState(false);
	const [selectedItem, setSelectedItem] = useState("");
	//nav click function to show subnav
	const handleItemClick = (item) => {
		setSelectedItem(item);
		if (item === "Actualnosci") {
			setShowSubNav(!showSubNav);
		}
	};

	const router = useRouter();
	const { id } = router.query;
	const [actu, setActu] = useState(null);

	useEffect(() => {
		const currentActu = allActus.find((actu) => actu.id === Number(id));
		setActu(currentActu || null);
		console.log(currentActu);
	}, [id, allActus]);

	if (!actu) {
		return <div>Stronie nie znaleziona</div>;
	}

	return (
		<div className="admin__panel">
			<nav>
				<ul>
					<li onClick={() => handleItemClick("Actualnosci")}>
						Actualnosci
						{showSubNav && (
							<ul>
								<Link href="/actuseditor/[id]" as="/actuseditor/1">
									Aktualnosc 1
								</Link>
								<Link href="/actuseditor/[id]" as="/actuseditor/2">
									Aktualnosc 2
								</Link>
								<Link href="/actuseditor/[id]" as="/actuseditor/3">
									Aktualnosc 3
								</Link>
							</ul>
						)}
					</li>
					<li>
						<Link href={"/"}>Orders</Link>
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
