import { useEffect } from "react";
import keysArray from "../../constants/keys";
import { Key } from "./Key/Key";

interface KeysProps {
	keyPressed: string[];
}

export const Keys: React.FC<KeysProps> = ({ keyPressed }) => {
	return (
		<div className="keys">
			{keysArray.map((key, id) => (
				<Key key={id} {...key} keyPressed={keyPressed} />
			))}
		</div>
	);
};
