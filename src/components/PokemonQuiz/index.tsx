import { useState } from "react"

import { ReturnButton } from "../ReturnButton"
import { CriesQuiz } from "./CriesQuiz"
import { ImageQuiz } from "./ImageQuiz"
import { Pokedex } from "../Pokedex"
import "./style.css"

export const PokemonQuiz = () => {
	const [quizType, setQuizType] = useState("")

	const handleQuizType = (type: string) => {
		setQuizType(type)
	}

	return (
		<>
			<Pokedex />
			<div className="pokemonQuiz_limiter">
				<div className="pokemonQuiz">
					<ReturnButton />
					<div className="pokemonQuiz_content fadein">
						<form>
							<div className="pokemonsQuiz_selectionType">
								<button type="button" onClick={() => handleQuizType("image")}>
									Image quiz
								</button>
								<button type="button" onClick={() => handleQuizType("audio")}>
									Cries quiz
								</button>
							</div>
							<h2>Who is this pokemon?</h2>
							{quizType === "image" && <ImageQuiz />}
							{quizType === "audio" && <CriesQuiz />}
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
