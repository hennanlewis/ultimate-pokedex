import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import { NationalPokedex } from "../components/NationalPokedex"

beforeEach(() => {
	// IntersectionObserver isn't available in test environment
	const mockIntersectionObserver = jest.fn()
	mockIntersectionObserver.mockReturnValue({
		observe: () => null,
		unobserve: () => null,
		disconnect: () => null,
	})
	window.IntersectionObserver = mockIntersectionObserver
})

test("Infinity scroll", async () => {
	const { container } = render(
		<MemoryRouter>
			<NationalPokedex />
		</MemoryRouter>
	)

	// não encontra cards que o observer insere na tela
	await expect(container.querySelector("a")).toBeInTheDocument()
})
