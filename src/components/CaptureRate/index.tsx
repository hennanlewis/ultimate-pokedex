import { ChangeEvent, useState } from "react"
import { MdCatchingPokemon } from "react-icons/md"

import { handleCapitalize } from "../../utils/dataTransform"
import { pokeAPIReq } from "../../utils/pokeAPIReq"
import { pokemonNames } from "../../utils/pokemonNames"
import { PokemonProps } from "../../utils/Types"
import { Pokedex } from "../Pokedex"
import "./style.css"

type CatchValuesProps = {
	name: string
	level: number
	currentHP: number
	ball: string
}

type ballsBonusProps = {
	[key: string]: {
		ballBonus: number
		extraBonus: number
	}
}

export const CaptureRate = () => {
	const [catchValues, setCatchValues] = useState<CatchValuesProps>({
		name: "",
		level: 1,
		currentHP: 100,
		ball: "Pokeball",
	})
	const [pokemon, setPokemon] = useState<PokemonProps | null>()
	const handleSelectedPokemon = () => {
		Promise.all([
			pokeAPIReq("pokemon/" + catchValues.name),
			pokeAPIReq("pokemon-species/" + catchValues.name),
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

	const ballsOptions: ballsBonusProps = {
		pokeball: {
			ballBonus: 1,
			extraBonus: 0,
		},
		greatball: {
			ballBonus: 1.5,
			extraBonus: 0,
		},
		ultraball: {
			ballBonus: 2,
			extraBonus: 0,
		},
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
	const bonusStatus = 1
	const baseHP = pokemon
		? pokemon.stats?.filter((item) => item.stat.name === "hp")[0].base_stat
		: 100
	const ballBonus = ballsOptions[catchValues.ball.toLowerCase()]
		? ballsOptions[catchValues.ball.toLowerCase()].ballBonus
		: 1
	const extraBonus = ballsOptions[catchValues.ball.toLowerCase()]
		? ballsOptions[catchValues.ball.toLowerCase()].extraBonus
		: 0
	const iv = 0
	const level = catchValues.level
	const captureRate = pokemon ? pokemon.capture_rate : 1
	const totalHP = ((2 * baseHP + iv) * level) / 100 + level + 10
	const currentHP = totalHP * (catchValues.currentHP / 100)
	const currentHPPercent = (100 * currentHP) / totalHP
	const a =
		extraBonus +
		(bonusStatus * (3 * totalHP - 2 * currentHP) * captureRate * ballBonus) /
			(3 * totalHP)
	const b = 1048560 / Math.sqrt(Math.sqrt(16711680 / a))
	const catchRate = Math.min(
		100,
		Number((100 * Math.pow(b / 65535, 4)).toFixed(1))
	)

	const hpBarColor = () => {
		if (currentHPPercent <= 20) return "#e20000"
		if (currentHPPercent <= 50) return "#eab308"
		return "#03a73f"
	}

	return (
		<>
			<Pokedex />
			<div className="captureRate_limiter transition200">
				<div className="captureRate">
					<form className="captureRate_form">
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
								{pokemonNames
									.sort((a, b) => (a.name > b.name ? 1 : -1))
									.map((item) => (
										<option key={item.name} value={item.name}>
											{item.name}
										</option>
									))}
							</datalist>
						</label>

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

						<label>
							<span>Current HP: {catchValues.currentHP}%</span>
							<input
								type="range"
								min="1"
								max="100"
								value={catchValues.currentHP}
								onChange={(event) => handleChangeDataField(event, "currentHP")}
							/>
						</label>

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
					</form>
					{pokemon && (
						<div className="captureRate_display_limiter">
							<div className="captureRate_display">
								<div className="captureRate_display_screenTop">
									<div className="display_screenTop_pokemonInfo">
										<div>
											<span>{handleCapitalize(pokemon.name)}</span>
											<span>Lv: {level}</span>
										</div>
										<div>
											<span>{<MdCatchingPokemon />}</span>
											<span className="screenTop_pokemonInfo_hp">
												HP
												<span className="pokemonInfo_hp_bar">
													<span
														style={{
															width: currentHPPercent + "%",
															backgroundColor: hpBarColor(),
														}}
														className="pokemonInfo_hp_barSize"
													></span>
												</span>
											</span>
										</div>
									</div>
									<img
										src={[
											"http://play.pokemonshowdown.com/sprites/ani/",
											pokemon.name.replaceAll("-", ""),
											".gif",
										].join("")}
										alt=""
									/>
								</div>
								<div className="captureRate_display_screenBottom">
									Your chance of capture a {pokemon.name} with a{" "}
									{catchValues.ball.toLowerCase()} is {catchRate}%.
								</div>
							</div>
						</div>
					)}
					<br />
				</div>
			</div>
		</>
	)
}
