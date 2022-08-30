import { SetStateAction } from "react"
import { handleCapitalize } from "../../utils/dataTransform"

import {
	BallsBonusProps,
	CatchValuesProps,
	StatusBonusProps,
} from "../../utils/Types"

export const SelectValues = (props: {
	name: string
	value: string
	keys: BallsBonusProps | StatusBonusProps
	setState: (value: SetStateAction<CatchValuesProps>) => void
}) => {
	const { name, value, keys, setState } = props
	return (
		<label>
			<span>{handleCapitalize(name)}:</span>
			<select
				className="text-black"
				value={value}
				name={name}
				onChange={(event) =>
					setState((oldValues) => {
						return {
							...oldValues,
							[name]: event.target.value,
						}
					})
				}
			>
				{Object.keys(keys).map((item) => (
					<option key={item} value={handleCapitalize(item)}>
						{handleCapitalize(item)}
					</option>
				))}
			</select>
		</label>
	)
}
