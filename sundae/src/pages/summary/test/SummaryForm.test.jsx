import {
	render,
	screen,
	waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Initial Conditions", () => {
	render(<SummaryForm />);
	const checkbox = screen.getByRole("checkbox", {
		name: /terms and conditions/i,
	});

	expect(checkbox).not.toBeChecked();

	const button = screen.getByRole("button", { name: /confirm order/i });
	expect(button).toBeDisabled();
});

test("Checkbox enables button on first click and disables on second click", () => {
	render(<SummaryForm />);
	const checkbox = screen.getByRole("checkbox", {
		name: /terms and conditions/i,
	});
	const button = screen.getByRole("button", { name: /confirm order/i });

	userEvent.click(checkbox);
	expect(button).toBeEnabled();

	userEvent.click(checkbox);
	expect(button).toBeDisabled();
});

test("popover responds to hover", async () => {
	render(<SummaryForm />);

	const nullPopOver = screen.queryByText(
		/no ice cream will actually be delivered/i,
	);
	expect(nullPopOver).not.toBeInTheDocument();

	const terms = screen.getByText(/terms and conditions/i);
	userEvent.hover(terms);
	const popOver = screen.queryByText(
		/no ice cream will actually be delivered/i,
	);
	expect(popOver).toBeInTheDocument();

	userEvent.unhover(terms);
	await waitForElementToBeRemoved(() =>
		screen.queryByText(/no ice cream will actually be delivered/i),
	);
});
