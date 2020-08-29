import state from '../fixtures/onlyOneItem.json'

describe('onlyOneItem', () => {
    it('should work', () => {
        cy.visit('/')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
