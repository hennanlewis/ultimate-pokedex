import { ChangeEvent } from "react"

export const SelectPokemonButton = (props: {
	label: string
	value: string
	setValue: (str: string) => void
	handleOnChangeValue: (
		event: ChangeEvent<HTMLInputElement>,
		setValue: (value: string) => void
	) => void
	handleSelectedValue: () => void
}) => {
	const { label, value, setValue, handleOnChangeValue, handleSelectedValue } =
		props
	return (
		<label>
			<span>{label}:</span>
			<input
				type="text"
				list="pokemon"
				value={value}
				onChange={(event) => handleOnChangeValue(event, setValue)}
			/>
			<button type="button" onClick={handleSelectedValue}>
				Select pokemon
			</button>
		</label>
	)
}
