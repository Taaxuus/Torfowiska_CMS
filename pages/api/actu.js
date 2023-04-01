import prisma from "@/server/prisma";

export default async function handle(req, res) {
	const { id, title, subtitle, image, author, content } = req.body;

	let result;
	if (id === 1) {
		result = await prisma.actu.update({
			where: {
				id: 1,
			},
			data: {
				title: title,
				subtitle: subtitle,
				image: image,
				author: author,
				content: content,
			},
		});
	} else if (id === 2) {
		result = await prisma.actu.update({
			where: {
				id: 2,
			},
			data: {
				title: title,
				subtitle: subtitle,
				image: image,
				author: author,
				content: content,
			},
		});
	} else if (id === 3) {
		result = await prisma.actu.update({
			where: {
				id: 3,
			},
			data: {
				title: title,
				subtitle: subtitle,
				image: image,
				author: author,
				content: content,
			},
		});
	}

	res.json(result);
}
