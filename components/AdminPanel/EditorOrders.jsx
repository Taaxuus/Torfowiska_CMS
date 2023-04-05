import { useState } from "react";

export default function EditorOrders({ allOrders }) {
	console.log(allOrders);
	const [orderName, setOrderName] = useState("");
	const [filesFolderUrl, setFilesFolderUrl] = useState("");
	const [editMode, setEditMode] = useState(false);
	const [editingId, setEditingId] = useState(null);
	const [Orders, setOrders] = useState(allOrders);

	async function handleCreate() {
		await fetch("/api/orders", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ orderName, filesFolderUrl }),
		});
		// Reset the form after creating a new order
		setOrderName("");
		setFilesFolderUrl("");
		fetchOrders();
	}

	async function handleUpdate() {
		await fetch(`/api/orders`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id: editingId, orderName, filesFolderUrl }),
		});
		// Reset the form after updating an order
		setOrderName("");
		setFilesFolderUrl("");
		setEditingId(null);
		setEditMode(false);
		fetchOrders();
	}

	async function handleDelete(id) {
		await fetch(`/api/orders`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id }),
		});

		fetchOrders();
	}

	function handleEdit(id) {
		const orderToEdit = allOrders.find((order) => order.id === id);
		setOrderName(orderToEdit.orderName);
		setFilesFolderUrl(orderToEdit.filesFolderUrl);
		setEditingId(id);
		setEditMode(true);
	}

	function handleCancelEdit() {
		setOrderName("");
		setFilesFolderUrl("");
		setEditingId(null);
		setEditMode(false);
	}

	async function fetchOrders() {
		const res = await fetch("/api/orders");
		const orders = await res.json();
		setOrders(orders);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (editMode) {
			handleUpdate();
		} else {
			handleCreate();
		}
	};

	return (
		<div>
			<h1>Orders</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="orderName">orderName:</label>
				<input
					type="text"
					id="orderName"
					value={orderName}
					onChange={(e) => setOrderName(e.target.value)}
				/>
				<label htmlFor="filesFolderUrl">filesFolderUrl:</label>
				<textarea
					id="filesFolderUrl"
					value={filesFolderUrl}
					onChange={(e) => setFilesFolderUrl(e.target.value)}
				/>
				<button type="submit">{editMode ? "Update" : "Create"}</button>
				{editMode && (
					<button type="button" onClick={handleCancelEdit}>
						Cancel
					</button>
				)}
			</form>
			<table className="public-orders__table">
				<thead>
					<tr>
						<th>orderName</th>
						<th>filesFolderUrl</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{allOrders.map((order) => (
						<tr key={order.id}>
							<td>{order.orderName}</td>
							<td>{order.filesFolderUrl}</td>
							<td>
								<button onClick={() => handleEdit(order.id)}>Edit</button>
								<button onClick={() => handleDelete(order.id)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
