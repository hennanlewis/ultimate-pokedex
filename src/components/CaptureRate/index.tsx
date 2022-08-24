import { ChangeEvent, useState } from "react"

import { handleCapitalize } from "../../utils/dataTransform"
import { pokeAPIReq } from "../../utils/pokeAPIReq"
import { ballsOptions } from "../../utils/pokeballsCatchData"
import { pokemonNames } from "../../utils/pokemonNames"
import { statusModifier } from "../../utils/statusCatchData"
import { CatchValuesProps, PokemonProps } from "../../utils/Types"
import { Pokedex } from "../Pokedex"
import { ReturnButton } from "../ReturnButton"
import { CaptureDisplay } from "./CaptureDisplay"
import "./style.css"

export const CaptureRate = () => {
	const [catchValues, setCatchValues] = useState<CatchValuesProps>({
		name: "",
		level: 1,
		ball: "Pokeball",
		currentHPPercent: 100,
		totalHP: 1,
		status: "none",
	})
	const [pokemon, setPokemon] = useState<PokemonProps | null>()
	const handleSelectedPokemon = () => {
		Promise.all([
			pokeAPIReq(
				"pokemon/" +
					pokemonNames.filter((item) => item.name === catchValues.name)[0].id
			),
			pokeAPIReq(
				"pokemon-species/" +
					pokemonNames.filter((item) => item.name === catchValues.name)[0].id
			),
		])
			.then((response) => {
				const test = { ...response[0], ...response[1] }
				setPokemon((value) => {
					return { ...value, ...test }
				})
			})
			.catch((error) => {
				console.log(error)
				setPokemon(null)
			})
	}

	const handleChangeDataField = (
		event: ChangeEvent<HTMLInputElement>,
		field: string
	) => {
		const target = event.target
		setCatchValues({
			...catchValues,
			[field]: target.type === "text" ? target.value : Number(target.value),
		})
	}

	return (
		<>
			<Pokedex />
			<div className="captureRate_limiter">
				<div className="captureRate">
					<ReturnButton />
					<form className="captureRate_form fadein">
						<label>
							<span>Pokemon:</span>
							<input
								type="text"
								list="pokemon"
								value={catchValues.name}
								onChange={(event) => handleChangeDataField(event, "name")}
							/>
							<button type="button" onClick={handleSelectedPokemon}>
								Select pokemon
							</button>
							<datalist id="pokemon">
								{[...pokemonNames]
									.sort((a, b) => (a.name > b.name ? 1 : -1))
									.map((item) => (
										<option key={item.name} value={item.name}>
											{item.name}
										</option>
									))}
							</datalist>
						</label>

						<label>
							<span>Current HP: {catchValues.currentHPPercent}%</span>
							<input
								type="range"
								min="1"
								max="100"
								value={catchValues.currentHPPercent}
								onChange={(event) =>
									handleChangeDataField(event, "currentHPPercent")
								}
							/>
						</label>

						<div>
							<label>
								<span>Ball:</span>
								<select
									className="text-black"
									value={catchValues.ball}
									onChange={(event) =>
										setCatchValues({
											...catchValues,
											ball: event.target.value,
										})
									}
								>
									{Object.keys(ballsOptions).map((item) => (
										<option key={item} value={handleCapitalize(item)}>
											{handleCapitalize(item)}
										</option>
									))}
								</select>
							</label>
							<label>
								<span>Status:</span>
								<select
									className="text-black"
									value={catchValues.status}
									onChange={(event) =>
										setCatchValues({
											...catchValues,
											status: event.target.value,
										})
									}
								>
									{Object.keys(statusModifier).map((item) => (
										<option key={item} value={handleCapitalize(item)}>
											{handleCapitalize(item)}
										</option>
									))}
								</select>
							</label>
						</div>

						<label>
							<span>Level: {catchValues.level}</span>
							<input
								type="range"
								min="1"
								max="100"
								value={catchValues.level}
								onChange={(event) => handleChangeDataField(event, "level")}
							/>
						</label>
					</form>
					{pokemon && (
						<div className="captureRate_display_limiter">
							<CaptureDisplay catchValues={catchValues} pokemon={pokemon} />
						</div>
					)}
					<br />
				</div>
			</div>
		</>
	)
}
