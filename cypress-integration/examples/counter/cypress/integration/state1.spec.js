import state from '../fixtures/four.json'

describe('four', () => {
    it('should work', () => {
        cy.visit('/')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})

