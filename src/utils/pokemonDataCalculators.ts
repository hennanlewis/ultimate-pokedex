import { ballsOptions } from "./pokeballsCatchData"
import { PokemonProps } from "./Types"

export const calculatePokemonBaseHP = (pokemon: PokemonProps): number => {
	return pokemon
		? pokemon.stats?.filter((item) => item.stat.name === "hp")[0].base_stat
		: 100
}

export const calculatePokemonBallBonus = (ballName: string): number => {
	return ballsOptions[ballName.toLowerCase()]
		? ballsOptions[ballName.toLowerCase()].ballBonus
		: 1
}

export const calculateRateExtraBonus = (ballName: string): number => {
	return ballsOptions[ballName.toLowerCase()]
		? ballsOptions[ballName.toLowerCase()].extraBonus
		: 0
}

// totalHP é da equação oficial para cálculo da taxa de captura.
// Pode ser encontrada em: https://bulbapedia.bulbagarden.net/wiki/Stat
export const calculateTotalHP = (baseHP: number, iv: number, level: number) => {
	return ((2 * baseHP + iv) * level) / 100 + level + 10
}

// O coeficiente "a" é da equação oficial para cálculo da taxa de captura.
// Pode ser encontrada em: https://bulbapedia.bulbagarden.net/wiki/Catch_rate
export const calculateACoefficient = (
	ballBonus: number,
	bonusStatus: number,
	captureRate: number,
	currentHP: number,
	extraBonus: number,
	totalHP: number
) => {
	return (
		extraBonus +
		(bonusStatus * (3 * totalHP - 2 * currentHP) * captureRate * ballBonus) /
			(3 * totalHP)
	)
}

// O coeficiente "b" é da equação oficial para cálculo da taxa de captura.
// Pode ser encontrada em: https://bulbapedia.bulbagarden.net/wiki/Catch_rate
export const calculateBCoefficient = (aCoefficient: number) => {
	return 1048560 / Math.sqrt(Math.sqrt(16711680 / aCoefficient))
}
