import { names } from "../utils/pokemonNames"
import { handleCapitalize, handleSharpedIDs } from "../utils/transformData"
import { Pokedex } from "./Pokedex"

// http://play.pokemonshowdown.com/sprites/ani/

export const NationalPokedex = () => {
	const pokemons = names

	return (
		<div className="pageBG">
			<Pokedex>
				{/* div para o mainDisplay ficar com cantos arredondados, */}
				{/* mesmo com o scroll aparecendo */}
				<div className="absolute rounded-xl overflow-hidden">
					<div className="mainDisplay">
						{pokemons.map((item, index) => (
							<figure key={item} className="mainDisplay_figure">
								<img
									alt={`Pokemon${handleSharpedIDs(index + 1)}`}
									className="opacity-100 m-2"
									src={[
										"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
										index + 1,
										".png",
									].join("")}
								/>
								<figcaption className="flex justify-center">
									<span className="absolute top-1">
										{handleSharpedIDs(index + 1)}
									</span>
									<span className="absolute bottom-2 font-light text-xs sm:text-base text-center">
										{handleCapitalize(item)}
									</span>
								</figcaption>
							</figure>
						))}
					</div>
				</div>
			</Pokedex>
		</div>
	)
}
