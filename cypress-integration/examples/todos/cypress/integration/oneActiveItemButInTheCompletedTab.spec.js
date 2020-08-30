import state from '../fixtures/oneActiveItemButInTheCompletedTab.json'

describe('oneActiveItemButInTheCompletedTab', () => {
    it('should work', () => {
        cy.visit('/')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
