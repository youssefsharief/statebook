import state from '../fixtures/searchedforAhmedAndFinishedLoadMore.json'

describe('searchedforAhmedAndFinishedLoadMore', () => {
    it('should work', () => {
        cy.visit('/ahmed')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
