/// <reference types="cypress" />

describe("Pokemon app home page", () => {
	beforeEach(() => {
		cy.visit(Cypress.env("testing_url"))
	})

	it("Check that all links are displayed on the page", () => {
		cy.get('[data-testid="pokeball-loading-gif"]', { timeout: 20000 }).should("not.exist")
		cy.get('[data-testid="nav-home-logo-link"]').should("exist")
		cy.get('[data-testid="nav-rpg-link"]').should("exist")
		cy.get('[data-testid="nav-stats-link"]').should("exist")
	})

	it("Check that all links are displayed on the navbar", () => {
		cy.get('[data-testid="pokeball-loading-gif"]', { timeout: 20000 }).should("not.exist")
		cy.get('[data-testid="rpg-link"]').should("exist")
		cy.get('[data-testid="pokemon-link"]').should("exist")
		cy.get('[data-testid="stats-link"]').should("exist")
	})

	it.skip("Check various filters", () => {
		cy.get('[data-testid="pokeball-loading-gif"]', { timeout: 20000 }).should("not.exist")

		// Change to fire and then check that there are less of them
		cy.contains('[class^="Dropdown-root"]', "all")
			.click()
			.within(() => {
				cy.get('[class^="Dropdown-menu"]').within(() => {
					cy.contains('[class="Dropdown-option"]', "fire").click()
				})
			})
		cy.get('[data-testid="pokeball-loading-gif"]', { timeout: 10000 }).should("not.exist")
		cy.get('[data-testid^="home-page-card"]').should("have.length.lessThan", 150)

		// Change to water now
		cy.contains('[class^="Dropdown-root"]', "fire")
			.click()
			.within(() => {
				cy.get('[class^="Dropdown-menu"]').within(() => {
					cy.contains('[class="Dropdown-option"]', "water").click()
				})
			})
		cy.get('[data-testid="pokeball-loading-gif"]', { timeout: 10000 }).should("not.exist")
		cy.get('img[data-testid$="-picture"]').each((picture) => {
			cy.get(picture).should("exist")
		})
		cy.get('[data-testid^="home-page-card"]').should("have.length.lessThan", 50)
	})
})
