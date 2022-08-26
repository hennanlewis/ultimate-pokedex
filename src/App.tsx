import { useEffect, useState } from "react"
import { HashRouter, Route, Routes } from "react-router-dom"

import { NationalPokedex } from "./components/NationalPokedex"
import { CaptureRate } from "./components/CaptureRate"
import { InfoPokemon } from "./components/InfoPokemon"
import { PokemonQuiz } from "./components/PokemonQuiz"
import { pokeAPIReqArray } from "./utils/pokeAPIReq"
import { PokemonsResultProps } from "./utils/Types"
import { MenuPage } from "./components/MenuPage"
import { Pokedex } from "./components/Pokedex"
import { SizeComparison } from "./components/SizeComparison"

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
					<Route path="menu" element={<MenuPage />} />
					<Route path="national-pokedex" element={<NationalPokedex />} />
					<Route path="pokemon" element={<NationalPokedex />} />
					<Route path="pokemon/:id" element={<InfoPokemon />} />
					<Route path="pokemon-quiz" element={<PokemonQuiz />} />
					<Route path="size-comparison" element={<SizeComparison />} />
				</Routes>
			</HashRouter>
		</>
	)
}

export default App
