import prisma from "@/server/prismaDB/prisma";

export default async function handle(req, res) {
	const { id, orderName, filesFolderUrl } = req.body;

	let result;

	if (req.method === "GET") {
		result = await prisma.orders.findMany();
	} else if (req.method === "POST") {
		result = await prisma.orders.create({
			data: {
				orderName: orderName,
				filesFolderUrl: filesFolderUrl,
			},
		});
	} else if (req.method === "PUT") {
		result = await prisma.orders.update({
			where: {
				id: id,
			},
			data: {
				orderName: orderName,
				filesFolderUrl: filesFolderUrl,
			},
		});
	} else if (req.method === "DELETE") {
		result = await prisma.orders.delete({
			where: {
				id: id,
			},
		});
	} else {
		res.status(405).json({ message: "Method not allowed" });
		return;
	}

	res.json(result);
}
