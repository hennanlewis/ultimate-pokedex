import { PokeAPIResProps, PokemonProps } from "./Types"

export const pokeAPIReqArray = (): Promise<PokeAPIResProps> => {
	const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=898"
	return fetch(url).then((response) => {
		if (!response.ok) {
			throw new Error(response.statusText)
		}
		return response.json()
	})
}

export const pokeAPIReq = (
	partialURL: string | null
): Promise<PokemonProps> => {
	const url = `https://pokeapi.co/api/v2/${partialURL}`
	return fetch(url).then((response) => {
		if (!response.ok) {
			throw new Error(response.statusText)
		}
		return response.json()
	})
}
