import state from '../fixtures/client-route.json'

describe('client-route', () => {
    it('should work', () => {
        cy.visit('/client/d5051503-3503-45d8-84c5-c3551df49433')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
