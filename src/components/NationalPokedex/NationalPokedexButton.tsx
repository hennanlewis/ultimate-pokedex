import { BiSearchAlt } from "react-icons/bi"
import { IoMdArrowRoundBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"

export const NationalPokedexButton = (props: {
	setIsSearchActive: (value: boolean) => void
}) => {
	const { setIsSearchActive } = props
	const navigate = useNavigate()
	const handlePageReturn = () => navigate(-1)
	return (
		<>
			<button type="button" onClick={handlePageReturn}>
				<IoMdArrowRoundBack />
			</button>
			<button type="button" onClick={() => setIsSearchActive(true)}>
				<BiSearchAlt />
			</button>
		</>
	)
}
