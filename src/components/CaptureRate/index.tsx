import { ChangeEvent, useState } from "react"

import { CatchValuesProps, PokemonProps } from "../../utils/Types"
import { ballsOptions } from "../../utils/pokeballsCatchData"
import { statusModifier } from "../../utils/statusCatchData"
import { pokemonNames } from "../../utils/pokemonNames"
import { PokemonDatalist } from "../PokemonDatalist"
import { pokeAPIReq } from "../../utils/pokeAPIReq"
import { CaptureDisplay } from "./CaptureDisplay"
import { ReturnButton } from "../ReturnButton"
import { SelectValues } from "./SelectValues"
import { RangeInput } from "./RangeInput"
import { Pokedex } from "../Pokedex"
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
			<main className="captureRate_limiter">
				<div className="captureRate">
					<ReturnButton />
					<form className="captureRate_form fadein">
						<PokemonDatalist />
						<label>
							<span>Pokemon:</span>
							<input
								type="text"
								list="pokemon"
								value={catchValues.name}
								name="pokemon"
								onChange={(event) => handleChangeDataField(event, "name")}
							/>
							<button type="button" onClick={handleSelectedPokemon}>
								Select pokemon
							</button>
						</label>

						<RangeInput
							title="Current HP"
							name="currentHPPercent"
							value={catchValues.currentHPPercent}
							showedValue={String(catchValues.currentHPPercent + "%")}
							handleChangeDataField={handleChangeDataField}
						/>

						<div>
							<SelectValues
								name="ball"
								value={catchValues.ball}
								keys={ballsOptions}
								setState={setCatchValues}
							/>

							<SelectValues
								name="status"
								value={catchValues.status}
								keys={statusModifier}
								setState={setCatchValues}
							/>
						</div>

						<RangeInput
							title="Level"
							name="level"
							value={catchValues.level}
							showedValue={String(catchValues.level)}
							handleChangeDataField={handleChangeDataField}
						/>
					</form>
					{pokemon && (
						<div className="captureRate_display_limiter">
							<CaptureDisplay catchValues={catchValues} pokemon={pokemon} />
						</div>
					)}
					<br />
				</div>
			</main>
		</>
	)
}
