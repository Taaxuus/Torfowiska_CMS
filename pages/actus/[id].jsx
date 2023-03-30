import { useRouter } from "next/router";
import Actu1Page from "@/components/Actu1Page";
import Actu2Page from "@/components/Actu2Page";
import Actu3Page from "@/components/Actu3Page";

export default function Actus() {
	const { query } = useRouter();

	let content = null;

	switch (query.id) {
		case "1":
			content = <Actu1Page />;
			break;
		case "2":
			content = <Actu2Page />;
			break;
		case "3":
			content = <Actu3Page />;
			break;
		default:
			content = <div>Strona nie znaleziona</div>;
			break;
	}

	return <div>{content}</div>;
}
