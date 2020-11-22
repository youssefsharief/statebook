import state from '../fixtures/added-an-entry-home-route.json'

describe('added-an-entry-home-route', () => {
    it('should work', () => {
        cy.visit('/')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
