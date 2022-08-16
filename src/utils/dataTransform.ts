// Deixa a primeira letra de cada palavra em maiúscula pois a
// propriedade css "capitalize" não funciona para chrome até
// o momento de criação dessa função
export const handleCapitalize = (input: string) => {
	const capitalized = input.replace(/(^[a-z]|-[a-z])/g, (_, str) =>
		str.toUpperCase()
	)
	return capitalized
}

// Transforma para o padrão #00X
export const handleSharpedIDs = (input: string | number) => {
	return "#" + String(input).padStart(3, "0")
}

// Transforma hexadecimal para valor válido para tailwind
export const handleTailwindValidValue = (hexadecimalColor: string) => {
	const index0 = hexadecimal[hexadecimalColor[0].toLowerCase()]
	const index1 = hexadecimal[hexadecimalColor[1].toLowerCase()]
	const index2 = hexadecimal[hexadecimalColor[2].toLowerCase()]
	const index3 = hexadecimal[hexadecimalColor[3].toLowerCase()]
	const index4 = hexadecimal[hexadecimalColor[4].toLowerCase()]
	const index5 = hexadecimal[hexadecimalColor[5].toLowerCase()]
	const red = index0 * 16 + index1
	const green = index2 * 16 + index3
	const blue = index4 * 16 + index5

	return [red, green, blue].join(", ")
}

const hexadecimal: { [key: string]: number } = {
	"0": 0,
	"1": 1,
	"2": 2,
	"3": 3,
	"4": 4,
	"5": 5,
	"6": 6,
	"7": 7,
	"8": 8,
	"9": 9,
	a: 10,
	b: 11,
	c: 12,
	d: 13,
	e: 14,
	f: 15,
}
