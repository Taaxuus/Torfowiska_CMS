import prisma from "@/server/prismaDB/prisma";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "email",
					placeholder: "john@example.com",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const admin = await prisma.admin.findUnique({
					where: { email: credentials.email },
				});
				console.log("Admin:", admin);
				if (!admin) {
					throw new Error("Invalid email or password");
				}

				console.log(admin.password);
				console.log(credentials.password);

				// Check if the provided password matches with the admin's password
				if (admin.password !== credentials.password) {
					throw new Error("Invalid email or password");
				}

				// Check if the authenticated user is the admin user
				if (admin.email !== "cezarydraus@hotmail.com") {
					throw new Error("Access denied");
				}

				return { id: admin.id, email: admin.email, isAdmin: true };
			},
		}),
	],
	session: {
		jwt: true,
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
	jwt: {
		secret: process.env.JWT_SECRET,
	},
	callbacks: {
		async jwt(token, user, account) {
			if (user) {
				token.id = user.id;
				token.email = user.email;
			}

			return token;
		},
		async session(session, token) {
			session.user = token;

			return session;
		},
	},
});
