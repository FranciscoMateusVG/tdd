import axios from "axios";
import { useEffect } from "react";
import ScoopOption from "./ScoopOption";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/Alert";
import { price } from "../../constants/prices";
import { useOrderDetails } from "../../contexts/OrderDetails";
export default function Options({ optionType }) {
	const [items, setItems] = useState([]);
	const [err, setErr] = useState(false);
	const [orderDetails, updateItemCount] = useOrderDetails();
	useEffect(() => {
		axios
			.get(`http://localhost:3030/${optionType}`)
			.then((response) => setItems(response.data))
			.catch((error) => setErr(true));
	}, []);

	const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;
	const title =
		optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

	const optionItems = items.map((item) => (
		<ItemComponent
			key={item.name}
			name={item.name}
			imagePath={item.imagePath}
			updateItemCount={(itemName, newItemCount) =>
				updateItemCount(itemName, newItemCount, optionType)
			}
		/>
	));

	if (err) {
		return <AlertBanner />;
	}

	return (
		<>
			<h2>{title}</h2>
			<p>{price[optionType]} each</p>
			<p>
				{title} total: {orderDetails[optionType]}
			</p>
			<Row>{optionItems}</Row>
		</>
	);
}
