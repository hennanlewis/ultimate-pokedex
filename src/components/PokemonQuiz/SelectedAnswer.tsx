import { srcModels } from "../../utils/srcModels"

export const SelectedAnswer = (props: {
	selectedAnswer: string
	correctAnswer: string
	type: string
}) => {
	const { type, correctAnswer, selectedAnswer } = props
	return (
		<>
			{selectedAnswer === correctAnswer && (
				<h3 className="pokemonQuiz_answer_correct">Correct answer!</h3>
			)}

			{selectedAnswer !== correctAnswer && type === "audio" && (
				<>
					<h3 className="pokemonQuiz_answer_wrong">The correct one is:</h3>
					<img src={srcModels.pokeAPIFrontSprite(correctAnswer)} alt="" />
				</>
			)}

			{selectedAnswer !== correctAnswer && type === "image" && (
				<h4 className="pokemonQuiz_answer_wrong">
					The correct is {correctAnswer}
				</h4>
			)}
		</>
	)
}
