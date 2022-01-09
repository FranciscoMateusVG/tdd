import "./App.css";
import { useState } from "react";

function App() {
	const [style, setStyle] = useState("red");
	const [disabled, setDisabled] = useState(false);
	const turnTo = style === "blue" ? "red" : "blue";

	const handleClick = () => {
		if (able) return;
		setStyle(turnTo);
	};

	const handleCheck = () => {
		setDisabled((p) => !p);
	};

	return (
		<div className="App">
			<button
				style={{ backgroundColor: disabled ? "grey" : style }}
				onClick={handleClick}
				disabled={disabled}
			>
				Change to {turnTo}
			</button>

			<input
				type="checkbox"
				id="disable-button-checkbox"
				aria-checked={able}
				onClick={handleCheck}
			/>
			<label htmlFor="disable-button-checkbox">Disable Button</label>
		</div>
	);
}

export default App;
