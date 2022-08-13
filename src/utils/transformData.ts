// A propriedade css "capitalize" não funciona para chrome até o momento
// de criação dessa função
export const handleCapitalize = (input: string) => {
	const capitalized = input.replace(/(^[a-z]|-[a-z])/g, (_, str) =>
		str.toUpperCase()
	)
	return capitalized
}

// Transformar para o padrão #00X
export const handleSharpedIDs = (input: string | number) => {
	return "#" + String(input).padStart(3, "0")
}
