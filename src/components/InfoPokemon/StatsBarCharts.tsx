import { Bar } from "react-chartjs-2"
import type { ChartData, ChartOptions } from "chart.js"
import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	LinearScale,
	LineElement,
	PointElement,
	Title,
} from "chart.js"
import { StatsProps } from "../../utils/Types"

ChartJS.register(
	BarElement,
	CategoryScale,
	LinearScale,
	LineElement,
	PointElement,
	Title
)

export const StatsBarChart = (props: {
	stats: StatsProps[]
	bgColorDataChart: string
}) => {
	const { stats, bgColorDataChart } = props
	const statsRenamed = ["HP", "ATK", "DEF", "SP. ATK", "SP. DEF", "SPD"]
	const stepSize = 20
	const maxValue = Math.max(...stats.map((item) => item.base_stat))
	const maxValueArray = Array(stats.length).fill(
		maxValue + stepSize - (maxValue % stepSize)
	)

	const chartData: ChartData<"bar"> = {
		labels: statsRenamed,
		datasets: [
			{
				data: stats.map((item) => item.base_stat),
				backgroundColor: `${bgColorDataChart}40`,
				borderColor: bgColorDataChart,
				borderRadius: 4,
				borderWidth: 3,
			},
			{
				data: maxValueArray,
				animation: false,
				backgroundColor: "#aaa",
				borderWidth: 0,
				barPercentage: 0.9,
			},
		],
	}

	const chartOptions: ChartOptions<"bar"> = {
		aspectRatio: 1.2,
		responsive: true,
		scales: {
			x: {
				stacked: true,
				ticks: {
					stepSize: stepSize,
				},
			},
		},
	}

	return (
		<div className="pokemonInfo_stats_barCharts">
			<Bar data={chartData} options={chartOptions} />
		</div>
	)
}
