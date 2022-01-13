import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
	it("Renderiza 9 botoes", () => {
		render(<Home />);
		const buttons = screen.getAllByRole("button");
		expect(buttons).toHaveLength(9);
	});

	it("A ordem dos 9 botoes ASDFGHJKL", () => {
		render(<Home />);
		const letras = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
		const buttons = screen.getAllByRole("button");
		letras.forEach((letra, i) => expect(buttons[i]).toHaveTextContent(letra));
		expect(buttons).toHaveLength(9);
	});
});
