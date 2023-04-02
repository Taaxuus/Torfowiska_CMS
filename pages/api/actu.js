import prisma from "@/server/prisma";

export default async function handle(req, res) {
	const { id, title, subtitle, image, author, content } = req.body;

	let result;

	result = await prisma.actu.update({
		where: {
			id: id,
		},
		data: {
			title: title,
			subtitle: subtitle,
			image: image,
			author: author,
			content: content,
		},
	});

	res.json(result);
}
