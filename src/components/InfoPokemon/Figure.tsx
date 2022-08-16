import { handleCapitalize, handleSharpedIDs } from "../../utils/dataTransform"
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
				src={[
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
					id,
					".png",
				].join("")}
				alt={handleCapitalize(String(pokemon?.name))}
			/>
		</>
	) : (
		<>
			<figcaption className="pokemonInfo_figure_captionMissingno">
				MissingNo
			</figcaption>
			<img
				src={
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"
				}
				alt="MissingNo"
			/>
		</>
	)
}
