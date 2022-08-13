export type PokemonsResultProps = {
	name: string
	url: string
}

export type PokeAPIResProps = {
	count: string
	next: string
	previous: string | null
	results: PokemonsResultProps[] | []
}

export type PokemonProps = {
	id: number
	height: number
	weight: number
	name: string
	flavor_text_entries: { flavor_text: string }[]
	stats: {
		base_stat: number
		stat: {
			name: string
		}
	}[]
}
