import prisma from "@/prisma";

export default async function main() {
	await prisma.actu.create({
		data: {
			title: "Alice",
			subtitle: "alice@prisma.io",
			content: "Hello Cezary",
			image: "default URL",
			author: "xxx",
		},
	});

	console.dir(allActu, { depth: null });
}
