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
})
