import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("display image for each scoop option from server", async () => {
	render(<Options optionType={"scoops"} />);

	const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });

	expect(scoopImages).toHaveLength(2);

	const altText = scoopImages.map((scoop) => scoop.alt);
	expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("display image for each toppings option from server", async () => {
	render(<Options optionType={"toppings"} />);

	const scoopImages = await screen.findAllByRole("img", {
		name: /topping$/i,
	});

	expect(scoopImages).toHaveLength(3);

	const altText = scoopImages.map((scoop) => scoop.alt);
	expect(altText).toEqual(["Cherries topping", "MMs topping", "Hot topping"]);
});
