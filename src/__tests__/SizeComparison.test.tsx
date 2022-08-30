import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"

import { SizeComparison } from "../components/SizeComparison"

test("Main buttons are showed", () => {
	render(
		<MemoryRouter>
			<SizeComparison />
		</MemoryRouter>
	)

	expect(screen.getByText(/Compare Ash to a Pokemon/i)).toBeInTheDocument()
	expect(screen.getByText(/Compare 2 Pokemon/i)).toBeInTheDocument()
})

test("Ash image is showed", () => {
	const { container } = render(
		<MemoryRouter>
			<SizeComparison />
		</MemoryRouter>
	)

	const compareButtons = screen.getAllByRole("button")
	userEvent.click(compareButtons[1])
	expect(container.querySelector("[src='./ash.png']")).toBeInTheDocument()
})

test("Ash comparison - only 1 'Select pokemon' button is showed", () => {
	const { container } = render(
		<MemoryRouter>
			<SizeComparison />
		</MemoryRouter>
	)

	const compareButtons = screen.getAllByRole("button")
	userEvent.click(compareButtons[1])
	expect(screen.getAllByText("Select pokemon").length).toBe(1)
})

test("2 'Select pokemon' buttons are showed", () => {
	render(
		<MemoryRouter>
			<SizeComparison />
		</MemoryRouter>
	)

	const compareButtons = screen.getAllByRole("button")
	userEvent.click(compareButtons[2])
	expect(screen.getAllByText("Select pokemon").length).toBe(2)
})
