import EditorOrders from "@/components/AdminPanel/EditorOrders";
import prisma from "@/server/prismaDB/prisma";

export default function OrdersEditor({ allOrders }) {
	console.log(allOrders);
	return (
		<>
			<EditorOrders allOrders={allOrders} />;
		</>
	);
}

export async function getServerSideProps() {
	const allOrders = await prisma.orders.findMany();

	return {
		props: {
			allOrders: JSON.parse(JSON.stringify(allOrders)),
		},
	};
}
