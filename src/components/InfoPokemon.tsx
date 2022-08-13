import { useEffect, useState } from "react"

import { pokeAPIReq } from "../utils/pokeAPIReq"
import { handleCapitalize } from "../utils/transformData"
import { PokemonProps } from "../utils/Types"
import { Pokedex } from "./Pokedex"

//http://play.pokemonshowdown.com/sprites/ani/
export const InfoPokemon = () => {
	const [pokemonInfo, setPokemonInfo] = useState<PokemonProps | null>(null)
	const id = 3
	useEffect(() => {
		Promise.all([
			pokeAPIReq("pokemon/" + id),
			pokeAPIReq("pokemon-species/" + id),
		]).then((response) => {
			let test = { ...response[0], ...response[1] }
			console.log(test)
			setPokemonInfo((value) => {
				return { ...value, ...response[0], ...response[1] }
			})
		})
	}, [])

	return (
		<div className="pageBG">
			<Pokedex>
				{/* div para o mainDisplay ficar com cantos arredondados, */}
				{/* mesmo com o scroll aparecendo */}
				<div className="absolute rounded-xl overflow-hidden">
					<div className="pokemonInfo">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 text-xl">
							<div className="pokemonInfo_figure">
								<img
									className=""
									src={[
										"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
										id,
										".png",
									].join("")}
									alt={handleCapitalize(String(pokemonInfo?.name))}
								/>
							</div>
							<div className="flex flex-col justify-center gap-6">
								<div className="pokemonInfo_name">{pokemonInfo?.name}</div>
								<div className="pokemonInfo_bodyAndType">
									<div className="flex flex-col items-center">
										<span className="text-[150%] font-bold">
											{Number(pokemonInfo?.height) / 10}m
										</span>
										<span className="font-light">Height</span>
									</div>
									<div className="flex flex-col items-center">
										<span className="text-[150%] font-bold">
											{Number(pokemonInfo?.weight) / 10}kg
										</span>
										<span className="font-light">Weight</span>
									</div>
								</div>
								<div className="pokemonInfo_description">
									{pokemonInfo?.flavor_text_entries[7].flavor_text}
								</div>
							</div>
						</div>
						{/* <span className="-mt-2 mb-4 text-[calc(3vw+2vh)]">
							{handleCapitalize(String(pokemonInfo?.name))}
						</span> */}
						<div className="flex justify-between">
							{/* {pokemonInfo?.stats.map((item) => (
							<div key={item.stat.name}>
								<span>{item.stat.name}: </span>
								<span>{item.base_stat} </span>
							</div>
						))} */}
						</div>
					</div>
				</div>
			</Pokedex>
		</div>
	)
}
