import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { price } from "../constants/prices";

const OrderDetails = createContext();

export function useOrderDetails() {
	const context = useContext(OrderDetails);

	if (!context) {
		throw new Error("Not provider");
	}

	return context;
}

function calculateSubtotal(optionType, optionCounts) {
	let optionCount = 0;
	for (const count of optionCounts[optionType].values()) {
		optionCount += count;
	}

	return optionCount * price[optionType];
}

export function OrderDetailsProvider(props) {
	const [optionCounts, setOptionCounts] = useState({
		scoops: new Map(),
		toppings: new Map(),
	});
	const [totals, setTotals] = useState({
		scoops: 0,
		toppings: 0,
		grandTotal: 0,
	});

	useEffect(() => {
		const scoopsSubtotal = calculateSubtotal("scoops", optionCounts);
		const toppingsSubtotal = calculateSubtotal("toppings", optionCounts);
		const grandTotal = scoopsSubtotal + toppingsSubtotal;

		setTotals({
			scoops: scoopsSubtotal,
			toppings: toppingsSubtotal,
			grandTotal,
		});
	}, [optionCounts]);

	const value = useMemo(() => {
		function updateItemCount(itemName, newItemCount, optionType) {
			const newOptionCounts = { ...optionCounts };
			const optionCountsMap = newOptionCounts[optionType];
			optionCountsMap.set(itemName, parseInt(newItemCount));

			setOptionCounts(newOptionCounts);
		}

		return [{ ...optionCounts }, updateItemCount];
	});

	return <OrderDetails.Provider value={value} {...props} />;
}
