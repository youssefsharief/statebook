import state from '../fixtures/oneActiveAndOneCompletedInCompletedTab.json'

describe('oneActiveAndOneCompletedInCompletedTab', () => {
    it('should work', () => {
        cy.visit('/')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
