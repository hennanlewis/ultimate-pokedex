import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"

import { PokemonQuiz } from "../components/PokemonQuiz"

test("Main buttons are showed", () => {
	render(
		<MemoryRouter>
			<PokemonQuiz />
		</MemoryRouter>
	)

	expect(screen.getByText(/Image Quiz/i)).toBeInTheDocument()
	expect(screen.getByText(/Cries Quiz/i)).toBeInTheDocument()
})

test("Image quiz button is clicked", () => {
	render(
		<MemoryRouter>
			<PokemonQuiz />
		</MemoryRouter>
	)

	expect(screen.getByText(/Image Quiz/i)).toBeInTheDocument()
	expect(screen.getByText(/Cries Quiz/i)).toBeInTheDocument()
})

test("Quiz button option 1 and 2 are clicked", () => {
	const { container } = render(
		<MemoryRouter>
			<PokemonQuiz />
		</MemoryRouter>
	)

	const compareButtons = screen.getAllByRole("button")
	userEvent.click(compareButtons[1])
	expect(screen.getByText("Select answer")).toBeInTheDocument()
	userEvent.click(compareButtons[2])
	expect(screen.getByText("Select answer")).toBeInTheDocument()
})
