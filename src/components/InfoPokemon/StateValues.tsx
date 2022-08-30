import { StatsProps } from "../../utils/Types"

export const StateValues = (props: { stats: StatsProps[] | undefined }) => {
	return (
		<div className="pokemonInfo_stats_values">
			{props.stats
				? props.stats.map((item) => (
						<span
							key={item.stat.name}
							className={`pokemon_stats_${item.stat.name.replace("-", "")}`}
						>
							<span>{item.base_stat}</span>
							<span>{item.stat.name.replace("-", " ")}</span>
						</span>
				  ))
				: Array(6)
						.fill(1)
						.map((item, index) => (
							<div key={index} className={`pokemon_stats_none`}>
								<span>0</span>
								<span>????</span>
							</div>
						))}
		</div>
	)
}
