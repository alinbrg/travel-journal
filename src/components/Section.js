import data from "../data";
import Card from "./Card";

export default function Section() {
	const mappedData = data.map((el) => {
		return <Card key={el.title} {...el} />;
	});

	return <section>{mappedData}</section>;
}
