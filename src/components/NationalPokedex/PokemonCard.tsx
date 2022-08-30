import { Link } from "react-router-dom"

import { handleCapitalize, handleSharpedIDs } from "../../utils/dataTransform"
import { srcModels } from "../../utils/srcModels"
import { PokemonSimpleDataProps } from "../../utils/Types"

export const PokemonCard = (props: { pokemon: PokemonSimpleDataProps }) => {
	const { pokemon } = props
	return (
		<Link to={"/pokemon/" + pokemon.id}>
			<figure className="nationalPokedex_figure">
				<img
					src={srcModels.pokeAPIFrontSprite(pokemon.id)}
					alt={`Pokemon${handleSharpedIDs(pokemon.id)}`}
				/>
				<figcaption className="nationalPokedex_figure_caption">
					<span>{handleSharpedIDs(pokemon.id)}</span>
					<span>{handleCapitalize(pokemon.name)}</span>
				</figcaption>
			</figure>
		</Link>
	)
}
