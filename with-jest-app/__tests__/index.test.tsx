import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
	//Preparo

	let buttons: any;
	beforeEach(() => {
		render(<Home />);
		buttons = screen.getAllByRole("sound");
	});

	//Testes

	it("Renderiza 9 botoes", () => {
		expect(buttons).toHaveLength(9);
	});

	it("A ordem dos 9 botoes ASDFGHJKL", () => {
		const letras = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
		letras.forEach((letra, i) => expect(buttons[i]).toHaveTextContent(letra));
		expect(buttons).toHaveLength(9);
	});
});
