import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import cookies from "js-cookie";

export default function withAuth(WrappedComponent) {
	return function Wrapper(props) {
		const [isAuthenticated, setIsAuthenticated] = useState(false);
		const router = useRouter();

		useEffect(() => {
			const token = cookies.get("token");
			if (!token) {
				router.replace("/login");
				return;
			}

			fetch("/api/auth", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ token }),
			})
				.then((res) => {
					if (!res.ok) {
						throw new Error("Invalid token");
					}
					setIsAuthenticated(true);
				})
				.catch((err) => {
					console.error(err);
					cookies.remove("token");
					router.replace("/login");
				});
		}, []);

		return isAuthenticated ? <WrappedComponent {...props} /> : null;
	};
}
