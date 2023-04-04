import OrdersPage from "../components/OrdersPage";

export default function Orders() {
	return (
		<>
			<OrdersPage />
		</>
	);
}

export async function getServerSideProps() {
	const allOrders = await prisma.orders.findMany({});

	return {
		props: {
			allOrders: JSON.parse(JSON.stringify(allOrders)),
		},
	};
}
