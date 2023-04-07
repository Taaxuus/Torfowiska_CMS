import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const router = useRouter();
	const { data: session } = useSession();

	async function handleSubmit(event) {
		event.preventDefault();

		const result = await signIn("credentials", {
			redirect: false,
			email,
			password,
		});

		if (result.error) {
			setErrorMessage(result.error);
		} else {
			console.log(session); // log the session information
			router.push("/");
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>
			</div>
			{errorMessage && <div>{errorMessage}</div>}
			<button type="submit">Log In</button>
		</form>
	);
}
