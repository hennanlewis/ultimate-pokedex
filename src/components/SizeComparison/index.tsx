import { ChangeEvent, useState } from "react"

import { CompareAshToPokemon } from "./CompareToPokemonImages"
import { CompareToAshImages } from "./CompareToAshImages"
import { pokemonNames } from "../../utils/pokemonNames"
import { pokeAPIReq } from "../../utils/pokeAPIReq"
import { ReturnButton } from "../ReturnButton"
import "./style.css"

export const SizeComparison = () => {
	const [optionsName, setOptionsName] = useState("")
	const [optionsName2, setOptionsName2] = useState("")
	const [heightPokemon1, setHeightPokemon1] = useState(1)
	const [heightPokemon2, setHeightPokemon2] = useState(1)
	const [selectedPokemon, setSelectedPokemon] = useState("")
	const [selectedPokemon2, setSelectedPokemon2] = useState("")
	const [sizeRatioAsh, setSizeRatioAsh] = useState(1)
	const [sizeRatioPokemon, setSizeRatioPokemon] = useState(1)
	const [sizeComparisonOption, setSizeComparisonOption] = useState("")

	const handleOptionsName = (
		event: ChangeEvent<HTMLInputElement>,
		setOption: (value: string) => void
	) => {
		setOption(event.target.value)
	}

	const handleSelectedPokemon = () => {
		setSelectedPokemon(optionsName)
		pokeAPIReq(
			"pokemon/" +
				pokemonNames.filter((item) => item.name === optionsName)[0].id
		)
			.then((response) => {
				setSizeRatioAsh(1.3 / (response.height / 8))
				setSizeRatioPokemon(response.height / heightPokemon2)
				setHeightPokemon1(response.height)
			})
			.catch((error) => console.error(error))
	}

	const handleSelectedPokemon2 = () => {
		setSelectedPokemon2(optionsName2)
		pokeAPIReq(
			"pokemon/" +
				pokemonNames.filter((item) => item.name === optionsName2)[0].id
		)
			.then((response) => {
				setSizeRatioPokemon(heightPokemon1 / response.height)
				setHeightPokemon2(response.height)
			})
			.catch((error) => console.error(error))
	}

	const handleSizeComparisonOption = (comparisonValue: string) => {
		setSizeComparisonOption(comparisonValue)
	}

	return (
		<div className="sizeComparison_limiter">
			<div className="sizeComparison">
				<ReturnButton />
				<form className="sizeComparison_form">
					<div className="sizeComparison_form_options">
						<button
							type="button"
							onClick={() => handleSizeComparisonOption("ash")}
						>
							Compare Ash to a Pokemon
						</button>
						<button
							type="button"
							onClick={() => handleSizeComparisonOption("pokemon")}
						>
							Compare 2 Pokemon
						</button>
					</div>
					{sizeComparisonOption !== "" && (
						<label>
							<span>Pokemon name:</span>
							<input
								type="text"
								list="pokemon"
								value={optionsName}
								onChange={(event) => handleOptionsName(event, setOptionsName)}
							/>
							<button type="button" onClick={handleSelectedPokemon}>
								Select pokemon
							</button>
							<datalist id="pokemon">
								{[...pokemonNames]
									.sort((a, b) => (a.name > b.name ? 1 : -1))
									.map((item) => (
										<option key={item.name} value={item.name}>
											{item.name}
										</option>
									))}
							</datalist>
						</label>
					)}
					{sizeComparisonOption === "pokemon" && (
						<label>
							<span>Second pokemon name:</span>
							<input
								type="text"
								list="pokemon"
								value={optionsName2}
								onChange={(event) => handleOptionsName(event, setOptionsName2)}
							/>
							<button type="button" onClick={handleSelectedPokemon2}>
								Select pokemon
							</button>
							<datalist id="pokemon">
								{[...pokemonNames]
									.sort((a, b) => (a.name > b.name ? 1 : -1))
									.map((item) => (
										<option key={item.name} value={item.name}>
											{item.name}
										</option>
									))}
							</datalist>
						</label>
					)}

					{sizeComparisonOption === "ash" && (
						<div className="sizeComparison_images_ash">
							<CompareToAshImages
								selectedPokemon={selectedPokemon}
								sizeRatio={sizeRatioAsh}
							/>
						</div>
					)}
					{sizeComparisonOption === "pokemon" && (
						<div className="sizeComparison_images_pokemon">
							<CompareAshToPokemon
								selectedPokemon1={selectedPokemon}
								selectedPokemon2={selectedPokemon2}
								sizeRatio={sizeRatioPokemon}
							/>
						</div>
					)}
				</form>
				<span>
					*Some pokemon do not have the correspondent approximate value due to
					their position on image from PokeAPI
				</span>
			</div>
		</div>
	)
}
