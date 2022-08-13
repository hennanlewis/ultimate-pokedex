import { useEffect, useState } from "react"
// import { InfoPokemon } from "./components/InfoPokemon"
// import { NationalPokedex } from "./components/NationalPokedex"

import { Pokedex } from "./components/Pokedex"
import { pokeAPIReqArray } from "./utils/pokeAPIReq"
import { PokemonsResultProps } from "./utils/Types"

function App() {
	const [, setPokemons] = useState<PokemonsResultProps[] | []>([])

	useEffect(() => {
		pokeAPIReqArray()
			.then((response) => {
				setPokemons(response.results)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	return (
		<Pokedex />
		// <NationalPokedex />
		// <InfoPokemon />
	)
}

export default App
