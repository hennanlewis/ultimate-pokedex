import { useState } from "react"
import { FaPause, FaPlay } from "react-icons/fa"
import { srcModels } from "../../utils/srcModels"

import { PokemonProps } from "../../utils/Types"
import { useInterval } from "../../utils/useInterval"

export const SpecieData = (props: { pokemon: PokemonProps | null }) => {
	const { pokemon } = props

	const [isPLaying, setIsPLaying] = useState(false)
	const audio = new Audio(pokemon ? srcModels.pokemonCries(pokemon.name) : "")

	useInterval(
		() => {
			setIsPLaying(false)
		},
		isPLaying ? 1500 : null
	)

	const handleClickAudio = () => {
		if (!isPLaying) {
			setIsPLaying(true)
			audio.play()
		}
	}

	return pokemon ? (
		<>
			<div className="pokemonInfo_name">
				<div>{pokemon?.name}</div>
				<div className="pokemonInfo_types">
					{pokemon?.types.map((item) => item.type.name).join(" / ")}
				</div>
			</div>
			<div className="pokemonInfo_commonData">
				<div className="pokemonInfo_height">
					<span>{Number(pokemon?.height) / 10}m</span>
					<span>height</span>
				</div>
				<div className="pokemonInfo_weight">
					<span>{Number(pokemon?.weight) / 10}kg</span>
					<span>weight</span>
				</div>
				<button className="pokemonInfo_cry" onClick={handleClickAudio}>
					{isPLaying ? <FaPause /> : <FaPlay />}
				</button>
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
					<span>height</span>
				</div>
				<div className="pokemonInfo_weight">
					<span>???</span>
					<span>weight</span>
				</div>
			</div>
			<div className="pokemonInfo_description">?????????????????????</div>
		</>
	)
}
