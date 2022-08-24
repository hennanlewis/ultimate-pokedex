import { IoMdArrowRoundBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"

import "./style.css"

export const ReturnButton = () => {
	const navigate = useNavigate()
	const handlePageReturn = () => navigate(-1)

	return (
		<>
			<button
				className="navigationReturn_button"
				type="button"
				onClick={handlePageReturn}
			>
				<IoMdArrowRoundBack />
			</button>
		</>
	)
}
