import Link from "next/link";
import { useState } from "react";

const AdminNav = () => {
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

	return (
		<>
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
									<Link href="/actuseditor/[id]" as="/actuseditor/2">
										Aktualnosc 3
									</Link>
								</ul>
							)}
						</li>
						<li>
							<Link href={"/ordersEditor"}>Orders</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default AdminNav;
