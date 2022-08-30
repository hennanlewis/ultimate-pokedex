import { Link } from "react-router-dom"

import { ReturnButton } from "../ReturnButton"
import { Pokedex } from "../Pokedex"
import "./style.css"

export const MenuPage = () => {
	return (
		<>
			<Pokedex />
			<main className="menuPage_limiter">
				<div className="menuPage">
					<ReturnButton />
					<div className="menuPage_options fadein">
						<Link to="/pokemon" className="menuPage_options_item">
							<img src="./MenuBG/Pokeball.png" alt="" />
							<span>
								National
								<br />
								Pokedex
							</span>
						</Link>
						<Link to="/catch-rate" className="menuPage_options_item">
							<img src="./MenuBG/Calculator.jpg" alt="" />
							<span>
								Catch Rate
								<br />
								Calculator
							</span>
						</Link>
						<Link to="/pokemon-quiz" className="menuPage_options_item">
							<img src="./MenuBG/Quiz.png" alt="" />
							<span>Quiz Pokemon</span>
						</Link>
						<Link to="/size-comparison" className="menuPage_options_item">
							<img src="./MenuBG/Ruler.png" alt="" />
							<span>Size Comparison</span>
						</Link>
					</div>
				</div>
			</main>
		</>
	)
}
