import state from '../fixtures/one-project-home-route.json'

describe('one-project-home-route', () => {
    it('should work', () => {
        cy.visit('/')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
