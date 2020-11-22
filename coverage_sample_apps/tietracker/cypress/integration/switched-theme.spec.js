import state from '../fixtures/switched-theme.json'

describe('switched-theme', () => {
    it('should work', () => {
        cy.visit('/settings')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
