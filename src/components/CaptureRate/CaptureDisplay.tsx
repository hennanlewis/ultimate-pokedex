import { MdCatchingPokemon } from "react-icons/md"

import { handleCapitalize } from "../../utils/dataTransform"
import { CatchValuesProps, PokemonProps } from "../../utils/Types"
import {
	calculateACoefficient,
	calculateBCoefficient,
	calculatePokemonBallBonus,
	calculatePokemonBaseHP,
	calculateRateExtraBonus,
	calculateTotalHP,
} from "../../utils/pokemonDataCalculators"
import { statusModifier } from "../../utils/statusCatchData"

export const CaptureDisplay = (props: {
	catchValues: CatchValuesProps
	pokemon: PokemonProps
}) => {
	const { catchValues, pokemon } = props

	const iv = 31
	const bonusStatus = statusModifier[catchValues.status.toLowerCase()]
	const captureRate = pokemon ? pokemon.capture_rate : 1
	const baseHP = calculatePokemonBaseHP(pokemon)
	const ballBonus = calculatePokemonBallBonus(catchValues.ball)
	const extraBonus = calculateRateExtraBonus(catchValues.ball)
	const totalHP = calculateTotalHP(baseHP, iv, catchValues.level)
	const currentHP = totalHP * (catchValues.currentHPPercent / 100)
	const aCoefficient = calculateACoefficient(
		ballBonus,
		bonusStatus,
		captureRate,
		currentHP,
		extraBonus,
		totalHP
	)
	const bCoefficient = calculateBCoefficient(aCoefficient)
	const catchRate = Math.min(
		100,
		Number((100 * Math.pow(bCoefficient / 65535, 4)).toFixed(1))
	)
	const hpBarColor = () => {
		if (catchValues.currentHPPercent <= 20) return "#e20000"
		if (catchValues.currentHPPercent <= 50) return "#eab308"
		return "#03a73f"
	}

	return (
		<div className="captureRate_display">
			<div className="captureRate_display_screenTop">
				<div className="display_screenTop_pokemonInfo">
					<div>
						<span>{handleCapitalize(pokemon.name)}</span>
						<span>Lv: {catchValues.level}</span>
					</div>
					<div>
						<span>{<MdCatchingPokemon />}</span>
						<span className="screenTop_pokemonInfo_hp">
							HP
							<span className="pokemonInfo_hp_bar">
								<span
									style={{
										width: catchValues.currentHPPercent + "%",
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
				Your chance of capture this {pokemon.name} with the{" "}
				{catchValues.ball.toLowerCase()} is {catchRate}%.
			</div>
		</div>
	)
}
