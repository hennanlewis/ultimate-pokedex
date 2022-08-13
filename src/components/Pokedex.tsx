import kalosPokedex from "../kalos-pokedex2.svg"

export const Pokedex = (props: { children?: JSX.Element | never[] }) => {
	const handleDisplayClick = () => {
		console.log("Abriu display")
	}

	return (
		<div className="pageBG">
			<div className="pokedex group">
				<img
					className="rounded-t-[4rem] rounded-b-[0.2rem] blur-[0.3px]"
					src={kalosPokedex}
					alt="Kalos Pokedex up"
				/>
				<div className="pokedex_display">
					<button
						type="button"
						onClick={handleDisplayClick}
						className="pokedex_display_button"
					>
						Open pokedex
					</button>
				</div>
				<img
					className="rounded-t-[4rem] rounded-b-[0.2rem] rotate-180 z-0"
					src={kalosPokedex}
					alt="Kalos Pokedex down"
				/>
			</div>
			{props.children}
		</div>
	)
}
