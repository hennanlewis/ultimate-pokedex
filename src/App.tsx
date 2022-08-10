import kalosPokedex from "./kalos-pokedex2.svg"

function App() {
	return (
		<div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-b from-slate-800 to-black text-gray-900">
			<div className="pokedex">
				<div className="flex flex-col justify-center items-center w-96">
					<img
						className="rounded-t-[4rem] rounded-b-[0.2rem]"
						src={kalosPokedex}
						alt="Kalos Pokedex up"
					/>
					<div className="">texto</div>
					<img
						className="rounded-t-[4rem] rounded-b-[0.2rem] rotate-180"
						src={kalosPokedex}
						alt="Kalos Pokedex down"
					/>
				</div>
			</div>
		</div>
	)
}

export default App
