import state from '../fixtures/haveItemsButFetching.json'

describe('haveItemsButFetching', () => {
    it('should work', () => {
        cy.visit('/')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
