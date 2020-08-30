import state from '../fixtures/allItemsAreInCartAndSoldOut.json'

describe('allItemsAreInCartAndSoldOut', () => {
    it('should work', () => {
        cy.visit('/')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
