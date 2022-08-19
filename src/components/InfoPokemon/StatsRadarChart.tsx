import { Radar } from "react-chartjs-2"
import { Chart as ChartJS, RadialLinearScale, Title, Filler } from "chart.js"
import type { ChartData, ChartOptions } from "chart.js"

import { StatsProps } from "../../utils/Types"

ChartJS.register(RadialLinearScale, Filler, Title)

export const StatsRadarChart = (props: {
	stats: StatsProps[]
	bgColorDataChart: string
}) => {
	const { stats, bgColorDataChart } = props
	const statsRenamed = ["HP", "ATK", "DEF", "SP. ATK", "SP. DEF", "SPD"]

	const chartData: ChartData<"radar"> = {
		labels: statsRenamed,
		datasets: [
			{
				label: "Stats",
				data: stats.map((item) => item.base_stat),
				backgroundColor: `${bgColorDataChart}80`,
				borderColor: bgColorDataChart,
				pointBackgroundColor: "#fff",
				pointBorderColor: bgColorDataChart,
				pointBorderWidth: 2.5,
				pointHoverBorderWidth: 3,
			},
		],
	}

	const chartOptions: ChartOptions<"radar"> = {
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			r: {
				pointLabels: { color: "black" },
				ticks: {
					backdropColor: "transparent",
					stepSize: 20,
				},
				min: 0,
			},
		},
	}

	return (
		<div className="pokemonInfo_stats_radarCharts">
			<Radar data={chartData} options={chartOptions} />
		</div>
	)
}
