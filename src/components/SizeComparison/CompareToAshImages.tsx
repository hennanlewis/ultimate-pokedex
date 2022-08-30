import { handleCapitalize } from "../../utils/dataTransform"
import { pokemonNames } from "../../utils/pokemonNames"
import { srcModels } from "../../utils/srcModels"

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
					src={srcModels.pokeAPIOfficialArtwork(
						pokemonNames.filter((item) => item.name === selectedPokemon)[0].id
					)}
					alt={handleCapitalize(selectedPokemon)}
					title={handleCapitalize(selectedPokemon)}
				/>
			)}
		</>
	)
}
