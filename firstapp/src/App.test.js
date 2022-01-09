import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Cor inicial correta", () => {
	render(<App />);

	const button = screen.getByRole("button", { name: "Change to blue" });

	expect(button).toHaveStyle({ backgroundColor: "red" });

	fireEvent.click(button);

	expect(button).toHaveStyle({ backgroundColor: "blue" });

	expect(button.textContent).toBe("Change to red");
});

test("Teste CheckBox", () => {
	render(<App />);

	const button = screen.getByRole("button", { name: "Change to blue" });

	expect(button).toBeEnabled();

	const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });
	expect(checkbox).not.toBeChecked();

	fireEvent.click(checkbox);

	expect(checkbox).toBeChecked();
	expect(button).toBeDisabled();

	fireEvent.click(checkbox);

	expect(checkbox).not.toBeChecked();
	expect(button).toBeEnabled();
});

test("flow 1", () => {
	render(<App />);

	const button = screen.getByRole("button", { name: "Change to blue" });
	const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

	fireEvent.click(checkbox);

	expect(button).toHaveStyle({ backgroundColor: "grey" });

	fireEvent.click(checkbox);

	expect(button).toHaveStyle({ backgroundColor: "red" });
});

test("flow 2", () => {
	render(<App />);

	const button = screen.getByRole("button", { name: "Change to blue" });
	const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

	fireEvent.click(button);
	expect(button).toHaveStyle({ backgroundColor: "blue" });

	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: "grey" });

	fireEvent.click(checkbox);
	expect(button).toHaveStyle({ backgroundColor: "blue" });
});
