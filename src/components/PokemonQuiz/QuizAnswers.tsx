import { useState } from "react"
import { pokemonNames } from "../../utils/pokemonNames"

export const QuizAnswers = (props: {
	srcNumber: number
	setAnswer: (value: string) => void
}) => {
	const { setAnswer, srcNumber } = props
	const answers = Array(3)
		.fill(0)
		.map((_, index) => (srcNumber + 594 * index) % pokemonNames.length)
		.sort()

	return (
		<>
			<div className="pokemonQuiz_question_answers">
				{answers.map((item) => (
					<button type="button" onClick={() => setAnswer(String(item))}>
						<img
							src={[
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
								item,
								".png",
							].join("")}
						/>
					</button>
				))}
			</div>
			<strong>Choose your answer</strong>
		</>
	)
}
