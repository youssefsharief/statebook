import state from '../fixtures/stats-route.json'

describe('stats-route', () => {
    it('should work', () => {
        cy.visit('/statistics')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
