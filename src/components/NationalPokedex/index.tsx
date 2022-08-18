import { useEffect, useState } from "react"
import { BiSearchAlt } from "react-icons/bi"

import { handleSharpedIDs } from "../../utils/dataTransform"
import { pokemonNames } from "../../utils/pokemonNames"
import useInterval from "../../utils/useInterval"
import { SimpleSearch } from "./SimpleSearch"
import { PokemonCard } from "./PokemonCard"
import { Pokedex } from "./../Pokedex"
import "./style.css"

// http://play.pokemonshowdown.com/sprites/ani/

export const NationalPokedex = () => {
	const [pokemons, setPokemons] = useState([pokemonNames[0]])
	const [isAutoReloading, setIsAutoReloading] = useState(true)
	const [isSearchActive, setIsSearchActive] = useState(false)
	const [search, setSearch] = useState("")

	const watcher = document.querySelector("#watcher")
	const watcherObserver = new IntersectionObserver((options) => {
		if (options[0].isIntersecting) {
			// watcher está em tela
			setIsAutoReloading(true)
			return
		}

		// watcher não está em tela
		setIsAutoReloading(false)
	})

	if (watcher && isAutoReloading) {
		watcherObserver.observe(watcher)
	}

	const filteredPokemon = isSearchActive
		? []
		: pokemonNames.filter((item) =>
				search === ""
					? true
					: item.name.match(search.toLowerCase()) ||
					  handleSharpedIDs(item.id).match(search.toLowerCase())
		  )

	useInterval(
		() => {
			if (pokemons.length < filteredPokemon.length)
				setPokemons([...pokemons, filteredPokemon[pokemons.length]])
		},
		pokemons.length < filteredPokemon.length && isAutoReloading ? 100 : null
	)

	useEffect(() => {
		setPokemons([])
	}, [isSearchActive])

	return (
		<>
			<Pokedex />
			<div className="nationalPokedex_display">
				<div className="limiter">
					<div className="nationalPokedex">
						<button
							type="button"
							className="nationalPokedex_search"
							onClick={() => setIsSearchActive(true)}
						>
							<span>
								Pesquisar
								<BiSearchAlt className="font-sans -scale-x-100" />
							</span>
							<strong>{search}</strong>
						</button>
						{pokemons.map((item) => (
							<PokemonCard key={item.name} pokemon={item} />
						))}
						<i id="watcher" />
					</div>
				</div>
				{isSearchActive && (
					<SimpleSearch
						search={search}
						setSearch={setSearch}
						setIsSearchActive={setIsSearchActive}
					/>
				)}
			</div>
		</>
	)
}
