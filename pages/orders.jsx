import OrdersSection from "@/components/OrdersSection/OrdersSection";
import Navigation from "@/components/PageStaticElements/Nav";
import Footer from "@/components/PageStaticElements/Footer";

export default function Orders({ allOrders }) {
	return (
		<>
			<Navigation />
			<OrdersSection orders={allOrders} />
			<Footer />
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
