import state from '../fixtures/oneActiveItem.json'

describe('oneActiveItem', () => {
    it('should work', () => {
        cy.visit('/')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
