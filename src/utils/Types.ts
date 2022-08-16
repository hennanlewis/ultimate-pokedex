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

export type StatsProps = {
	base_stat: number
	stat: {
		name: string
	}
}

export type PokemonProps = {
	id: number
	height: number
	weight: number
	name: string
	flavor_text_entries: {
		language: { name: string }
		flavor_text: string
	}[]
	stats: StatsProps[]
	types: { type: { name: string } }[]
}

export type ColorByTypeProps = {
	[key: string]: string
}
