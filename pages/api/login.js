import prisma from "@/server/prismaDB/prisma";
import cookie from "cookie";
import crypto from "crypto";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	const { email, password } = req.body;
	const admin = await prisma.admin.findUnique({
		where: { email },
	});
	if (!admin || admin.password !== password) {
		return res.status(401).json({ message: "Invalid email or password" });
	}

	const token = crypto.randomBytes(20).toString("hex");

	res.setHeader(
		"Set-Cookie",
		cookie.serialize("token", token, {
			httpOnly: true,
			sameSite: "strict",
			maxAge: 60 * 60 * 24, // 1 day
			path: "/",
		})
	);
	res.status(200).json({ message: "Login successful", token });
}
