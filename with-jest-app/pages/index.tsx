import { Audios } from "@/components/Audios/Audios";
import { Keys } from "@/components/Keys/Keys";
import { useEffect, useState } from "react";

export default function Home() {
	const [keyPressed, setKeyPressed] = useState([""]);

	const handleKeyDown = (e: any) => {
		setKeyPressed(new Array(e.keyCode.toString()));
	};

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
	}, []);

	return (
		<div className="container">
			<Keys keyPressed={keyPressed} /> <Audios keyPressed={keyPressed[0]} />
		</div>
	);
}
