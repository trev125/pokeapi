describe("Pokemon app pokemon card page", () => {
	beforeEach(() => {
		cy.visit(Cypress.env("testing_url"))
	})

	it("Go to a pokemon page from the home page and verify you are there", () => {
		const pokemonData = {
			id: 25,
			name: "Pikachu",
			nextName: "Raichu",
		}
		cy.get('[data-testid="pokeball-loading-gif"]', { timeout: 20000 }).should("not.exist")
		cy.get('[data-testid="pokemon-link"]').click()

		// Check we are on the right page and it has loaded
		cy.url().should("include", `/pokemon/${pokemonData.id}`)
		cy.get('[data-testid="pokeball-loading-gif"]', { timeout: 5000 }).should("not.exist")

		// Check the main card
		cy.get(`[data-testid="${pokemonData.name.toLowerCase()}-card"]`)
			.should("exist")
			.and("not.be.empty")
			.within(() => {
				cy.get(`[data-testid="${pokemonData.name.toLowerCase()}-topbar"]`).should("exist").and("not.be.empty")
				cy.get(`[data-testid="${pokemonData.name.toLowerCase()}-picture"]`).should("exist")
				cy.get(`[data-testid^="${pokemonData.name.toLowerCase()}-move"]`).should("exist").and("not.be.empty")
				cy.get(`[data-testid="${pokemonData.name.toLowerCase()}-description"]`).should("not.be.empty")
			})

		// Check the buttons at the bottom
		cy.get('[data-testid="go-to-previous-pokemon-button"]').should("be.enabled")
		cy.get('[data-testid="go-to-next-pokemon-button"]').should("be.enabled").click()

		// Make sure it takes us to the correct page
		cy.url().should("include", `/pokemon/${pokemonData.id + 1}`)
		cy.get('[data-testid="pokeball-loading-gif"]', { timeout: 5000 }).should("not.exist")
		cy.get(`[data-testid="${pokemonData.nextName.toLowerCase()}-topbar"]`).should("exist").and("not.be.empty")
	})
})
