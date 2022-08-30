import { ChangeEvent } from "react"

import { handleCapitalize } from "../../utils/dataTransform"

export const RangeInput = (props: {
	name: string
	title: string
	value: number
	showedValue: string
	handleChangeDataField: (
		event: ChangeEvent<HTMLInputElement>,
		field: string
	) => void
}) => {
	const { title, name, value, showedValue, handleChangeDataField } = props
	return (
		<label>
			<span>
				{title}: {showedValue}
			</span>
			<input
				type="range"
				min="1"
				max="100"
				name={handleCapitalize(name)}
				value={value}
				onChange={(event) => handleChangeDataField(event, name)}
			/>
		</label>
	)
}
