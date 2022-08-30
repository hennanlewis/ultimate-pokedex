export const srcModels = {
	pokeAPIOfficialArtwork: (id: string) => {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
	},
	pokeAPIFrontSprite: (id: string) => {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
	},
	pokemonGIF: (name: string) => {
		return `http://play.pokemonshowdown.com/sprites/ani/${name}.gif`
	},
	pokemonCries: (name: string) => {
		return `https://play.pokemonshowdown.com/audio/cries/${name}.mp3`
	},
}
