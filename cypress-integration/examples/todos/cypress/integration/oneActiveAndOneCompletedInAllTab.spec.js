import state from '../fixtures/oneActiveAndOneCompletedInAllTab.json'

describe('oneActiveAndOneCompletedInAllTab', () => {
    it('should work', () => {
        cy.visit('/')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
