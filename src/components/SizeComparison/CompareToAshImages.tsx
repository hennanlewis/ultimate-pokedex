import { pokemonNames } from "../../utils/pokemonNames"

export const CompareToAshImages = (props: {
	sizeRatio: number
	selectedPokemon: string
}) => {
	const { sizeRatio, selectedPokemon } = props
	return (
		<>
			<img
				src="./ash.png"
				alt=""
				style={
					sizeRatio < 1
						? { height: 15 * sizeRatio + "rem" }
						: { height: "15rem" }
				}
			/>
			{selectedPokemon !== "" && (
				<img
					className="sizeComparison_images_pokemon"
					style={
						sizeRatio > 1
							? { height: 15 / sizeRatio + "rem" }
							: { height: "15rem" }
					}
					src={[
						"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
						pokemonNames.filter((item) => item.name === selectedPokemon)[0].id,
						".png",
					].join("")}
					alt=""
				/>
			)}
		</>
	)
}
