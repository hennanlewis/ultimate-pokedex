import { pokemonNames } from "../../utils/pokemonNames"
import { srcModels } from "../../utils/srcModels"

export const CompareAshToPokemon = (props: {
	sizeRatio: number
	selectedPokemon1: string
	selectedPokemon2: string
}) => {
	const { selectedPokemon1, selectedPokemon2, sizeRatio } = props
	return (
		<>
			{selectedPokemon1 !== "" && (
				<img
					className="sizeComparison_images_selectedPokemon"
					src={srcModels.pokeAPIOfficialArtwork(
						pokemonNames.filter((item) => item.name === selectedPokemon1)[0].id
					)}
					alt={selectedPokemon1}
					title={selectedPokemon1}
					style={
						sizeRatio < 1
							? { height: 10 * sizeRatio + "rem" }
							: { height: "10rem" }
					}
				/>
			)}
			{selectedPokemon2 !== "" && (
				<img
					className="sizeComparison_images_selectedPokemon"
					style={
						sizeRatio > 1
							? { height: 10 / sizeRatio + "rem" }
							: { height: "10rem" }
					}
					src={srcModels.pokeAPIOfficialArtwork(
						pokemonNames.filter((item) => item.name === selectedPokemon2)[0].id
					)}
					alt={selectedPokemon2}
					title={selectedPokemon2}
				/>
			)}
		</>
	)
}
