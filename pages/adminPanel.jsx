import AdminPanel from "@/components/AdminPanel/AdminPanel";

export default function AdminPage({ allActu }) {
	return (
		<>
			<AdminPanel props={allActu} />
		</>
	);
}
//actus 1 data
export const getServerSideProps = async () => {
	const allActu = await prisma.actu.findMany({
		orderBy: { id: "desc" },
		take: 1,
	});

	return {
		props: {
			allActu: JSON.parse(JSON.stringify(allActu)),
		},
	};
};
