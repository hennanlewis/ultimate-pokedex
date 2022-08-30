import { StatsRadarChart } from "./StatsRadarChart"
import { PokemonProps } from "../../utils/Types"
import { StatsBarChart } from "./StatsBarCharts"

export const StatsCharts = (props: {
	pokemonInfo: PokemonProps
	typeColor: string
}) => {
	const { pokemonInfo, typeColor } = props
	return (
		<div className="pokemonInfo_stats_charts">
			{pokemonInfo && (
				<StatsRadarChart
					stats={pokemonInfo.stats}
					bgColorDataChart={typeColor}
				/>
			)}
			{pokemonInfo && (
				<StatsBarChart stats={pokemonInfo.stats} bgColorDataChart={typeColor} />
			)}
		</div>
	)
}
