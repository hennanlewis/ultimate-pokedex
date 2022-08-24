import { Link } from "react-router-dom"

import "./style.css"

export const Pokedex = () => {
	return (
		<>
			<div className="pokedex group">
				<img className="pokedex_top" src="pokedex.svg" alt="Kalos Pokedex up" />
				<div className="pokedex_display">
					<Link to="menu" className="pokedex_display_button">
						Open pokedex
					</Link>
				</div>
				<img
					className="pokedex_bottom"
					src="pokedex.svg"
					alt="Kalos Pokedex down"
				/>
			</div>
		</>
	)
}
