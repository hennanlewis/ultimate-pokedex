import { useState } from "react"
import { FaPause, FaPlay } from "react-icons/fa"

import { numberArrayGenerator } from "../../utils/numberArrayGenerator"
import { handleCapitalize } from "../../utils/dataTransform"
import { SelectedAnswer } from "./SelectedAnswer"
import { pokemonNames } from "../../utils/pokemonNames"
import { useInterval } from "../../utils/useInterval"

export const CriesQuiz = () => {
	const [answersArray, setAnswersArray] = useState(
		numberArrayGenerator(pokemonNames.length, 3)
	)
	const [isPlaying, setIsPlaying] = useState(false)
	const [isAnswerSelected, setIsAnswerSelected] = useState(false)
	const [selectedAnswer, setSelectedAnswer] = useState("")

	const correctAnswer = answersArray[0]
	const audio = new Audio(
		[
			"https://play.pokemonshowdown.com/audio/cries/",
			pokemonNames
				.filter((item) => item.id === String(correctAnswer))[0]
				.name.replace("-", ""),
			".mp3",
		].join("")
	)

	useInterval(
		() => {
			setIsPlaying(false)
		},
		isPlaying ? 1500 : null
	)

	const handlePlayAudio = () => {
		if (!isPlaying) {
			setIsPlaying(true)
			audio.play()
		}
	}

	const handleChooseOption = () => {
		const answer = document.querySelector(
			"[type='radio']:checked"
		) as HTMLInputElement
		if (answer) {
			setSelectedAnswer(answer.value)
			setIsAnswerSelected(true)
		}
	}

	const handleNewQuestion = () => {
		setIsAnswerSelected(false)
		setAnswersArray(numberArrayGenerator(pokemonNames.length, 3))
		setIsPlaying(false)
	}

	return (
		<>
			<button type="button" onClick={handlePlayAudio} className="audioButton">
				{isPlaying ? <FaPause /> : <FaPlay className="translate-x-1" />}
			</button>
			<div className="pokemonQuiz_audioAnswer_options">
				{!isAnswerSelected &&
					[...answersArray].sort().map((item) => (
						<label key={item}>
							<input type="radio" name="audioAnswer" value={item} />
							<img
								src={[
									"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
									item,
									".png",
								].join("")}
								alt={handleCapitalize(pokemonNames[Number(item) - 1].name)}
								title={handleCapitalize(pokemonNames[Number(item) - 1].name)}
							/>
						</label>
					))}
			</div>

			{!isAnswerSelected && (
				<button type="button" onClick={handleChooseOption}>
					Select answer
				</button>
			)}

			{isAnswerSelected && (
				<SelectedAnswer
					correctAnswer={String(correctAnswer)}
					selectedAnswer={selectedAnswer}
					type="audio"
				/>
			)}
			<button type="button" onClick={handleNewQuestion}>
				New question
			</button>
		</>
	)
}
