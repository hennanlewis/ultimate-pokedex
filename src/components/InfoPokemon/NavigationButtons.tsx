import {
	IoIosArrowBack,
	IoIosArrowForward,
	IoMdArrowRoundBack,
} from "react-icons/io"
import { useNavigate, useParams } from "react-router-dom"

export const NavigationButtonsInfo = () => {
	const params = useParams()
	const navigate = useNavigate()
	const handlePageReturn = () => navigate(-1)
	const handlePrevPokemon = () =>
		navigate("/pokemon/" + (Number(params.id) - 1), { replace: true })
	const handleNextPokemon = () =>
		navigate("/pokemon/" + (Number(params.id) + 1), { replace: true })

	return (
		<>
			<button type="button" onClick={handlePageReturn}>
				<IoMdArrowRoundBack />
			</button>
			<span className="pokemonInfo_navigationButtons_prevNext">
				<button type="button" onClick={handlePrevPokemon}>
					<IoIosArrowBack />
				</button>
				<button type="button" onClick={handleNextPokemon}>
					<IoIosArrowForward />
				</button>
			</span>
		</>
	)
}
