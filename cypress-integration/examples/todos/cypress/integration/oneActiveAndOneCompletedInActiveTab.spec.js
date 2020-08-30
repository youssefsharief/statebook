import state from '../fixtures/oneActiveAndOneCompletedInActiveTab.json'

describe('oneActiveAndOneCompletedInActiveTab', () => {
    it('should work', () => {
        cy.visit('/')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
