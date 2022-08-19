import { useEffect, useState } from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import { CaptureRate } from "./components/CaptureRate"
import { InfoPokemon } from "./components/InfoPokemon"
import { NationalPokedex } from "./components/NationalPokedex"

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
		<>
			<HashRouter>
				<Routes>
					<Route index element={<Pokedex />} />
					<Route path="catch-rate" element={<CaptureRate />} />
					<Route path="national-pokedex" element={<NationalPokedex />} />
					<Route path="pokemon" element={<NationalPokedex />} />
					<Route path="pokemon/:id" element={<InfoPokemon />} />
				</Routes>
			</HashRouter>
		</>
	)
}

export default App
