import state from '../fixtures/about-route.json'

describe('about-route', () => {
    it('should work', () => {
        cy.visit('/about')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
