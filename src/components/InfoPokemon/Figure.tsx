import { handleCapitalize, handleSharpedIDs } from "../../utils/dataTransform"
import { srcModels } from "../../utils/srcModels"
import { PokemonProps } from "../../utils/Types"

export const Figure = (props: {
	id: string | undefined
	pokemon: PokemonProps | null
}) => {
	const { id, pokemon } = props

	return pokemon && id ? (
		<>
			<figcaption className="pokemonInfo_figure_caption">
				{handleSharpedIDs(id)}
			</figcaption>
			<img
				src={srcModels.pokeAPIOfficialArtwork(id)}
				alt={handleCapitalize(String(pokemon?.name))}
			/>
		</>
	) : (
		<>
			<figcaption className="pokemonInfo_figure_captionMissingno">
				MissingNo
			</figcaption>
			<img src={srcModels.pokeAPIFrontSprite("0")} alt="MissingNo" />
		</>
	)
}
