import { useEffect } from "react";
import keysArray from "../../constants/keys";
import { Audio } from "./Audio/Audio";

interface AudiosProps {
	keyPressed: string;
}

export const Audios: React.FC<AudiosProps> = ({ keyPressed }) => {
	const keys = keysArray.map((key) => key.keyId);

	if (keys.includes(keyPressed)) {
		var audio = document.getElementById(keyPressed.toString());

		if (audio) {
			//@ts-ignore
			audio.currentTime = 0;
			//@ts-ignore
			audio.play();
		}
	}

	return (
		<>
			{" "}
			{keysArray.map((key, id) => (
				<Audio key={id} {...key} />
			))}
		</>
	);
};
