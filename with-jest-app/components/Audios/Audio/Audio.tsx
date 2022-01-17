interface AudioProps {
	keyId: string;
	letter: string;
	sound: string;
}

export const Audio: React.FC<AudioProps> = ({ keyId, letter, sound }) => {
	return (
		<audio id={keyId}>
			<source src={`/sounds/${sound}.wav`} type="audio/wav" />
			Your browser does not support the audio element.
		</audio>
	);
};
