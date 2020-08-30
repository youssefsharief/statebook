import state from '../fixtures/searchedforAhmed.json'

describe('searchedforAhmed', () => {
    it('should work', () => {
        cy.visit('/ahmed')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
