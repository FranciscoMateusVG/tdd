import axios from "axios";
import { useEffect } from "react";
import ScoopOption from "./ScoopOption";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/Alert";

export default function Options({ optionType }) {
	const [items, setItems] = useState([]);
	const [err, setErr] = useState(false);
	useEffect(() => {
		axios
			.get(`http://localhost:3030/${optionType}`)
			.then((response) => setItems(response.data))
			.catch((error) => setErr(true));
	}, []);

	const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;

	const optionItems = items.map((item) => (
		<ItemComponent
			key={item.name}
			name={item.name}
			imagePath={item.imagePath}
		/>
	));

	if (err) {
		return <AlertBanner />;
	}

	return <Row>{optionItems}</Row>;
}
