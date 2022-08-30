import { render, screen } from "@testing-library/react"

import { CaptureDisplay } from "../components/CaptureRate/CaptureDisplay"
import { CatchValuesProps, PokemonProps } from "../utils/Types"

const catchValues: CatchValuesProps = {
	ball: "pokeball",
	currentHPPercent: 100,
	level: 100,
	name: "charmander",
	status: "none",
	totalHP: 100,
}

const pokemon: PokemonProps = {
	id: 4,
	name: "charmander",
	height: 0,
	weight: 0,
	capture_rate: 45,
	flavor_text_entries: [
		{
			language: { name: "en" },
			flavor_text: "xxx",
		},
	],
	stats: [
		{
			base_stat: 85,
			stat: {
				name: "hp",
			},
		},
	],
	types: [{ type: { name: "" } }],
}

test("charmander capture rate with a pokeball", () => {
	render(<CaptureDisplay catchValues={catchValues} pokemon={pokemon} />)

	// pokeball, status: none
	expect(screen.getByText(/with the pokeball is 5.9%./i)).toBeInTheDocument()
})

test("charmander capture rate with a greatball", () => {
	const greatballValues = { ...catchValues, ball: "greatball" }
	render(<CaptureDisplay catchValues={greatballValues} pokemon={pokemon} />)
	expect(screen.getByText(/with the greatball is 8.8%./i)).toBeInTheDocument()
})

test("charmander capture rate with a ultraball", () => {
	const ultraballValues = { ...catchValues, ball: "ultraball" }
	render(<CaptureDisplay catchValues={ultraballValues} pokemon={pokemon} />)
	expect(screen.getByText(/with the ultraball is 11.8%./i)).toBeInTheDocument()
})

test("charmander capture rate with a asleep status", () => {
	const asleepValues = { ...catchValues, status: "asleep" }
	render(<CaptureDisplay catchValues={asleepValues} pokemon={pokemon} />)
	expect(screen.getByText(/with the pokeball is 11.8%./i)).toBeInTheDocument()
})

test("charmander capture rate with a freezen status", () => {
	const freezenValues = { ...catchValues, status: "freezen" }
	render(<CaptureDisplay catchValues={freezenValues} pokemon={pokemon} />)
	expect(screen.getByText(/with the pokeball is 11.8%./i)).toBeInTheDocument()
})

test("charmander capture rate with a paralyzed status", () => {
	const paralyzedValues = { ...catchValues, status: "paralyzed" }
	render(<CaptureDisplay catchValues={paralyzedValues} pokemon={pokemon} />)
	expect(screen.getByText(/with the pokeball is 8.8%./i)).toBeInTheDocument()
})

test("charmander capture rate with a poisoned status", () => {
	const poisonedValues = { ...catchValues, status: "poisoned" }
	render(<CaptureDisplay catchValues={poisonedValues} pokemon={pokemon} />)
	expect(screen.getByText(/with the pokeball is 8.8%./i)).toBeInTheDocument()
})

test("charmander capture rate with a burned status", () => {
	const burnedValues = { ...catchValues, status: "burned" }
	render(<CaptureDisplay catchValues={burnedValues} pokemon={pokemon} />)
	expect(screen.getByText(/with the pokeball is 8.8%./i)).toBeInTheDocument()
})

test("charmander capture rate with HP = 1%", () => {
	const hpValues = { ...catchValues, currentHPPercent: 1 }
	render(<CaptureDisplay catchValues={hpValues} pokemon={pokemon} />)
	expect(screen.getByText(/with the pokeball is 17.5%./i)).toBeInTheDocument()
})
