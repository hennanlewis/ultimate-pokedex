import { render, screen } from "@testing-library/react"

import { Figure } from "../components/InfoPokemon/Figure"
import { SpecieData } from "../components/InfoPokemon/SpecieData"
import { StateValues } from "../components/InfoPokemon/StateValues"
import { PokemonProps } from "../utils/Types"

const pokemon: PokemonProps = {
	id: 2,
	name: "ivysaur",
	height: 10,
	weight: 130,
	capture_rate: 45,
	flavor_text_entries: [
		{
			flavor_text:
				"When the bulb on\nits back grows\nlarge, it appears\fto lose the\nability to stand\non its hind legs.",
			language: {
				name: "en",
			},
		},
	],
	stats: [
		{
			base_stat: 60,
			stat: {
				name: "hp",
			},
		},
		{
			base_stat: 62,
			stat: {
				name: "attack",
			},
		},
		{
			base_stat: 63,
			stat: {
				name: "defense",
			},
		},
		{
			base_stat: 80,
			stat: {
				name: "special-attack",
			},
		},
		{
			base_stat: 80,
			stat: {
				name: "special-defense",
			},
		},
		{
			base_stat: 60,
			stat: {
				name: "speed",
			},
		},
	],
	types: [
		{
			type: {
				name: "grass",
			},
		},
		{
			type: {
				name: "poison",
			},
		},
	],
}

test("Figure component data", () => {
	render(<Figure id={String(pokemon.id)} pokemon={pokemon} />)
	expect(screen.getByText(/#002/i)).toBeInTheDocument()
})

test("SpecieData component data", () => {
	render(<SpecieData pokemon={pokemon} />)

	expect(screen.getByText(/ivysaur/i)).toBeInTheDocument()
	expect(screen.getByText(/grass \/ poison/i)).toBeInTheDocument()
	expect(screen.getByText(/1m/i)).toBeInTheDocument()
	expect(screen.getByText(/13kg/i)).toBeInTheDocument()
})

test("SpecieData component data", () => {
	render(<SpecieData pokemon={pokemon} />)

	expect(screen.getByText(/ivysaur/i)).toBeInTheDocument()
	expect(screen.getByText(/grass \/ poison/i)).toBeInTheDocument()
	expect(screen.getByText(/1m/i)).toBeInTheDocument()
	expect(screen.getByText(/13kg/i)).toBeInTheDocument()
})

test("StateValues component data", () => {
	const { container } = render(<StateValues stats={pokemon.stats} />)

	expect(container.querySelector(".pokemon_stats_hp")).toHaveTextContent("60hp")
	expect(container.querySelector(".pokemon_stats_attack")).toHaveTextContent(
		"62attack"
	)
	expect(container.querySelector(".pokemon_stats_defense")).toHaveTextContent(
		"63defense"
	)
	expect(
		container.querySelector(".pokemon_stats_specialattack")
	).toHaveTextContent("80special attack")
	expect(
		container.querySelector(".pokemon_stats_specialdefense")
	).toHaveTextContent("80special defense")
	expect(container.querySelector(".pokemon_stats_speed")).toHaveTextContent(
		"60speed"
	)
})
