import { Link } from "react-router-dom"
import { handleCapitalize, handleSharpedIDs } from "../../utils/dataTransform"
import { PokemonSimpleDataProps } from "../../utils/Types"

export const PokemonCard = (props: { pokemon: PokemonSimpleDataProps }) => {
	const { pokemon } = props
	return (
		<Link to={"/pokemon/" + pokemon.id}>
			<figure className="nationalPokedex_figure">
				<img
					alt={`Pokemon${handleSharpedIDs(pokemon.id)}`}
					src={[
						"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
						pokemon.id,
						".png",
					].join("")}
				/>
				<figcaption className="nationalPokedex_figure_caption">
					<span>{handleSharpedIDs(pokemon.id)}</span>
					<span>{handleCapitalize(pokemon.name)}</span>
				</figcaption>
			</figure>
		</Link>
	)
}
