import AdminPanel from "@/components/AdminPanel/AdminPanel";

export default function AdminPage({ all1Actu }) {
	return (
		<>
			<AdminPanel props={all1Actu} />
		</>
	);
}
//actus 1 data
export const getServerSideProps = async () => {
	const all1Actu = await prisma.actu.findMany({
		orderBy: { id: "desc" },
		take: 1,
	});

	return {
		props: {
			all1Actu: JSON.parse(JSON.stringify(all1Actu)),
		},
	};
};
