import state from '../fixtures/oneCompletedItemInTheAllTab.json'

describe('oneCompletedItemInTheAllTab', () => {
    it('should work', () => {
        cy.visit('/')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
