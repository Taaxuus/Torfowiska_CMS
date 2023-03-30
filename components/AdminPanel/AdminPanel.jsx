import React, { useRef, useState, useEffect } from "react";
import EditorActu1 from "./EditorActu1";
import EditorActu2 from "./EditorActu2";
import EditorActu3 from "./EditorActu3";
import EditorOrders from "./EditorOrders";

const AdminPanel = () => {
	//nav Statement
	const [showSubNav, setShowSubNav] = useState(false);
	const [selectedItem, setSelectedItem] = useState("");
	//nav click function to show subnav
	const handleItemClick = (item) => {
		setSelectedItem(item);
		if (item === "Actualnosci") {
			setShowSubNav(!showSubNav);
		} else {
			setShowSubNav(false);
			setShowActu1Editor(false);
			setShowActu2Editor(false);
			setShowActu3Editor(false);
			+setShowOrders(false);
		}
	};
	//Show editors logic
	const [showActu1Editor, setShowActu1Editor] = useState(false);
	const [showActu2Editor, setShowActu2Editor] = useState(false);
	const [showActu3Editor, setShowActu3Editor] = useState(false);
	const [showOrders, setShowOrders] = useState(false);

	const handleActuClick = (item) => {
		setSelectedItem(item);
		if (item === "Actu1") {
			setShowActu1Editor(true);
			setShowActu2Editor(false);
			setShowActu3Editor(false);
			setShowOrders(false);
		} else if (item === "Actu2") {
			setShowActu1Editor(false);
			setShowActu2Editor(true);
			setShowActu3Editor(false);
			setShowOrders(false);
		} else if (item === "Actu3") {
			setShowActu1Editor(false);
			setShowActu2Editor(false);
			setShowActu3Editor(true);
			setShowOrders(false);
		} else if (item === "Orders") {
			setShowActu1Editor(false);
			setShowActu2Editor(false);
			setShowActu3Editor(false);
			setShowOrders(true);
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
									<li onClick={() => handleActuClick("Actu1")}>Actu1</li>
									<li onClick={() => handleActuClick("Actu2")}>Actu2</li>
									<li onClick={() => handleActuClick("Actu3")}>Actu3</li>
								</ul>
							)}
						</li>
						<li onClick={() => handleActuClick("Orders")}>Orders</li>
					</ul>
				</nav>
				{showActu1Editor && <EditorActu1 />}
				{showActu2Editor && <EditorActu2 />}
				{showActu3Editor && <EditorActu3 />}
				{showOrders && <EditorOrders />}
			</div>
		</>
	);
};

export default AdminPanel;
