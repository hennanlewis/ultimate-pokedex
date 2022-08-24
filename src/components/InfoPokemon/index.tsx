import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { colorsByPokemonType } from "../../utils/colorByPokemonType"
import { handleTailwindValidValue } from "../../utils/dataTransform"
import { NavigationButtonsInfo } from "./NavigationButtons"
import { pokeAPIReq } from "../../utils/pokeAPIReq"
import { PokemonProps } from "../../utils/Types"
import { StatsCharts } from "./StatsCharts"
import { StateValues } from "./StateValues"
import { SpecieData } from "./SpecieData"
import { Pokedex } from "../Pokedex"
import { Figure } from "./Figure"
import "./style.css"

export const InfoPokemon = () => {
	const [pokemonInfo, setPokemonInfo] = useState<PokemonProps | null>(null)
	const params = useParams()

	const typecolor = pokemonInfo?.types[0].type.name
		? colorsByPokemonType[pokemonInfo?.types[0].type.name]
		: "#000000"

	useEffect(() => {
		Promise.all([
			pokeAPIReq("pokemon/" + params.id),
			pokeAPIReq("pokemon-species/" + params.id),
		])
			.then((response) => {
				const test = { ...response[0], ...response[1] }
				setPokemonInfo((value) => {
					return { ...value, ...test }
				})
			})
			.catch((error) => {
				console.log(error)
				setPokemonInfo(null)
			})
		document.documentElement.style.setProperty(
			"--typecolor",
			handleTailwindValidValue(typecolor.slice(1))
		)
	}, [typecolor, params.id])

	return (
		<>
			<Pokedex />
			<div className="pokemonInfo_limiter">
				<div className="pokemonInfo_navigationButtons">
					<NavigationButtonsInfo />
				</div>
				<div className="pokemonInfo fadein">
					<div className="pokemonInfo-mediaQueryOptions">
						<figure className="pokemonInfo_figure">
							<Figure pokemon={pokemonInfo} id={params.id} />
						</figure>
						<div className="pokemonInfo_specieData">
							<SpecieData pokemon={pokemonInfo} />
						</div>
					</div>
					<div className="pokemonInfo_stats">
						<span>stats</span>
						<StateValues stats={pokemonInfo?.stats} />
						{pokemonInfo && (
							<StatsCharts pokemonInfo={pokemonInfo} typeColor={typecolor} />
						)}
					</div>
				</div>
			</div>
		</>
	)
}
