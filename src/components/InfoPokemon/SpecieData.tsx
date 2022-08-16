import { PokemonProps } from "../../utils/Types"

export const SpecieData = (props: { pokemon: PokemonProps | null }) => {
	const { pokemon } = props
	return pokemon ? (
		<>
			<div className="pokemonInfo_name">{pokemon?.name}</div>
			<div className="pokemonInfo_commonData">
				<div className="pokemonInfo_height">
					<span>{Number(pokemon?.height) / 10}m</span>
					<span>Height</span>
				</div>
				<div className="pokemonInfo_weight">
					<span>{Number(pokemon?.weight) / 10}kg</span>
					<span>Weight</span>
				</div>
			</div>
			<div className="pokemonInfo_description">
				{pokemon?.flavor_text_entries
					.filter((item) => item.language.name === "en")[0]
					.flavor_text.replaceAll("\u000c", " ")}
			</div>
		</>
	) : (
		<>
			<div className="pokemonInfo_name">MissingNo</div>
			<div className="pokemonInfo_commonData">
				<div className="pokemonInfo_height">
					<span>???</span>
					<span>Height</span>
				</div>
				<div className="pokemonInfo_weight">
					<span>???</span>
					<span>Weight</span>
				</div>
			</div>
			<div className="pokemonInfo_description">?????????????????????</div>
		</>
	)
}
