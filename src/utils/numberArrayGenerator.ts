export const numberArrayGenerator = (
	maxValue: number,
	quantity: number
): number[] => {
	if (quantity < 1) return []

	let numberArray: number[] = []
	for (;;) {
		const randomValue = Math.floor(Math.random() * maxValue) + 1
		if (numberArray.indexOf(randomValue) === -1) {
			numberArray.push(randomValue)
		}
		if (numberArray.length === quantity) return numberArray
	}
}
