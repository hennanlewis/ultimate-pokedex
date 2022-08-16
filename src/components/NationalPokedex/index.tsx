import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { handleCapitalize, handleSharpedIDs } from "../../utils/dataTransform"
import { names } from "../../utils/pokemonNames"
import { Pokedex } from "./../Pokedex"
import "./style.css"

// http://play.pokemonshowdown.com/sprites/ani/

export const NationalPokedex = () => {
	const pokemons = names

	return (
		<>
			<Pokedex />
			<div className="nationalPokedex_limiter">
				<div className="nationalPokedex">
					{pokemons.map((name, index) => (
						<Link key={name} to={"/pokemon/" + (index + 1)}>
							<figure className="nationalPokedex_figure">
								<img
									alt={`Pokemon${handleSharpedIDs(index + 1)}`}
									className="w-[96px] h-[96px] m-2"
									src={[
										"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
										index + 1,
										".png",
									].join("")}
								/>
								<figcaption className="nationalPokedex_figure_caption">
									<span>{handleSharpedIDs(index + 1)}</span>
									<span>{handleCapitalize(name)}</span>
								</figcaption>
							</figure>
						</Link>
					))}
				</div>
			</div>
		</>
	)
}
