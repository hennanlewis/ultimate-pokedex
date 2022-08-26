import { ChangeEvent, useState } from "react"

import { numberArrayGenerator } from "../../utils/numberArrayGenerator"
import { pokemonNames } from "../../utils/pokemonNames"
import { SelectedAnswer } from "./SelectedAnswer"

export const ImageQuiz = () => {
	const [isAnswerSelected, setIsAnswerSelected] = useState(false)
	const [selectedAnswer, setSelectedAnswer] = useState("")
	const [randomPokemon, setRandomPokemon] = useState(
		numberArrayGenerator(pokemonNames.length, 5)
	)

	const handleChangeValue = (event: ChangeEvent<HTMLSelectElement>) => {
		setSelectedAnswer(event.target.value)
	}

	const handleNewQuestion = () => {
		setRandomPokemon(numberArrayGenerator(pokemonNames.length, 5))
		setSelectedAnswer("")
		setIsAnswerSelected(false)
	}

	const handleChooseOption = () => {
		const answer = document.querySelector("[name='name']") as HTMLInputElement
		if (answer) {
			setSelectedAnswer(answer.value.toLowerCase())
			setIsAnswerSelected(true)
		}
	}

	return (
		<>
			{!isAnswerSelected && (
				<>
					<img
						className="brightness-0"
						src={[
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
							randomPokemon[0],
							".png",
						].join("")}
						alt="Pokemon quiz"
					/>
					<label>
						<select
							id="pokemon"
							onChange={(event) => handleChangeValue(event)}
							name="name"
						>
							{[...pokemonNames]
								.sort((a, b) => (a.name > b.name ? 1 : -1))
								.filter((item) => randomPokemon.indexOf(Number(item.id)) !== -1)
								.map((item) => (
									<option key={item.name} value={item.name}>
										{item.name}
									</option>
								))}
						</select>
					</label>
				</>
			)}

			{!isAnswerSelected && (
				<button type="button" onClick={handleChooseOption}>
					Select answer
				</button>
			)}

			{isAnswerSelected && (
				<SelectedAnswer
					correctAnswer={String(pokemonNames[randomPokemon[0] - 1].name)}
					selectedAnswer={selectedAnswer}
					type="image"
				/>
			)}

			<button type="button" onClick={handleNewQuestion}>
				New question
			</button>
		</>
	)
}
