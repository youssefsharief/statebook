import state from '../fixtures/2ipadsInCartAndSoldOut.json'

describe('2ipadsInCartAndSoldOut', () => {
    it('should work', () => {
        cy.visit('/')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
