import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import cookies from "js-cookie";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	async function handleLogin(event) {
		event.preventDefault();
		setIsLoading(true);
		const response = await fetch("/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});
		if (response.ok) {
			const { token } = await response.json();
			document.cookie = `token=${token}; path=/`;
			alert("You are logged in");
			router.push("/adminPanel"); // Redirect to admin panel
		} else {
			alert("Invalid email or password.");
		}
		setIsLoading(false);
	}

	return (
		<div className="login__page">
			<form className="login__page--form" onSubmit={handleLogin}>
				<label>
					Email
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<button type="submit" disabled={isLoading}>
					{isLoading ? "Loading..." : "Log in"}
				</button>
			</form>
		</div>
	);
}
