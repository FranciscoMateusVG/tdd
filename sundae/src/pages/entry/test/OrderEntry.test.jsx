import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import OrderEntry from "../OrderEntry";

test("handle erros", async () => {
	server.resetHandlers();
	server.use([
		rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
			return res(ctx.status(500));
		}),
		rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
			return res(ctx.status(500));
		}),
	]);

	render(<OrderEntry />);

	waitFor(async () => {
		const alerts = await screen.findAllByRole("alert");
		expect(alerts).toHaveLength(2);
	});
});
