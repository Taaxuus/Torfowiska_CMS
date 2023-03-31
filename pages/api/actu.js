import prisma from "@/prisma";

export default async function handle(req, res) {
	const { title, subtitle, image, author, content } = req.body;
	const result = await prisma.actu.create({
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
