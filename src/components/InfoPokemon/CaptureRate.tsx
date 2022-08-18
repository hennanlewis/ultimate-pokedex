import { StatsProps } from "../../utils/Types"

export const CaptureRate = (props: {
	stats: StatsProps[] | undefined
	captureRate: number | undefined
}) => {
	const { captureRate, stats } = props
	const bonusStatus = 1
	const currentHP = 1
	const baseHP = stats
		? stats?.filter((item) => item.base_stat)[0].base_stat
		: 100
	const level = 100
	const iv = 31
	const totalHP = ((2 * baseHP + iv) * level) / 100 + level + 10
	const bonusBall = 1
	const a =
		(bonusStatus * (3 * totalHP - 2 * currentHP) * 45) / (3 * totalHP) / 255
	const b = 1048560 / Math.sqrt(Math.sqrt(16711680 / a))

	return (
		<div>
			{a / 255 + " " + b}
			<br />
			{Math.round(totalHP)}
		</div>
	)
}
