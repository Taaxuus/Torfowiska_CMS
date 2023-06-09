import EditorOrders from "@/components/AdminPanel/EditorOrders";
import prisma from "@/server/prismaDB/prisma";
import AdminNav from "@/components/AdminPanel/AdminNav";

export default function OrdersEditor({ allOrders }) {
	console.log(allOrders);
	return (
		<>
			<div className="orders__editor">
				<AdminNav />
				<EditorOrders allOrders={allOrders} />
			</div>
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
