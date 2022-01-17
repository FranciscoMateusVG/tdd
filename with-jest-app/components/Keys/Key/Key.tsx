import { useEffect, useRef, useState } from "react";

interface KeyProps {
	keyId: string;
	letter: string;
	sound: string;
	keyPressed: string[];
}

export const Key: React.FC<KeyProps> = ({
	keyId,
	letter,
	sound,
	keyPressed,
}) => {
	const ref = useRef(null);

	useEffect(() => {
		if (keyPressed[0] === keyId) {
			//@ts-ignore
			ref.current.className = "key active";
			setTimeout(() => {
				//@ts-ignore
				ref.current.className = "key";
			}, 300);
		}
	}, [keyPressed]);

	return (
		<div
			ref={ref}
			data-key={keyId}
			role="sound"
			className="key"
			onKeyDown={(e) => {
				console.log(e);
			}}
		>
			<span className="spanStyle">{letter}</span>
			<span className="sound">{sound}</span>
		</div>
	);
};
