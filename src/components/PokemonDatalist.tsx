import { pokemonNames } from "../utils/pokemonNames"

export const PokemonDatalist = () => {
	return (
		<datalist id="pokemon">
			{[...pokemonNames]
				.sort((a, b) => (a.name > b.name ? 1 : -1))
				.map((item) => (
					<option key={item.name} value={item.name}>
						{item.name}
					</option>
				))}
		</datalist>
	)
}
