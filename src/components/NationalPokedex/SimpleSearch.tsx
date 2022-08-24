export const SimpleSearch = (props: {
	search: string
	setSearch: (value: string) => void
	setIsSearchActive: (value: boolean) => void
}) => {
	const { search, setSearch, setIsSearchActive } = props
	return (
		<>
			<div className="nationalPokedex_searchScreen_options">
				<input
					type="text"
					onChange={(event) => setSearch(event.target.value)}
					value={search}
				/>
				<button type="button" onClick={() => setIsSearchActive(false)}>
					Fechar
				</button>
			</div>
		</>
	)
}
