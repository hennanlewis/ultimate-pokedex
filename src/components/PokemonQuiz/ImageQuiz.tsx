import { ChangeEvent, useState } from "react"

import { pokemonNames } from "../../utils/pokemonNames"
import { SelectedAnswer } from "./SelectedAnswer"

export const ImageQuiz = () => {
	const [isAnswerSelected, setIsAnswerSelected] = useState(false)
	const [selectedAnswer, setSelectedAnswer] = useState("")
	const [randomPokemon, setRandomPokemon] = useState(
		Math.floor(Math.random() * pokemonNames.length)
	)
	const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
		setSelectedAnswer(event.target.value)
	}

	const handleNewQuestion = () => {
		setRandomPokemon(Math.floor(Math.random() * pokemonNames.length))
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
							randomPokemon + 1,
							".png",
						].join("")}
						alt="Pokemon quiz"
					/>
					<label>
						<input
							type="text"
							name="name"
							list="pokemon"
							value={selectedAnswer}
							onChange={(event) => handleChangeValue(event)}
						/>
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
				</>
			)}
			{!isAnswerSelected && (
				<button type="button" onClick={handleChooseOption}>
					Select answer
				</button>
			)}

			{isAnswerSelected && (
				<SelectedAnswer
					correctAnswer={String(pokemonNames[randomPokemon].name)}
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
