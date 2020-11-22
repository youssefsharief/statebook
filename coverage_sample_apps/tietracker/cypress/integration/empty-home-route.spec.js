import state from '../fixtures/empty-home-route.json'

describe('empty-home-route', () => {
    it('should work', () => {
        cy.visit('/')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
