import state from '../fixtures/07-open-an-empty-category.json'

describe('07-open-an-empty-category', () => {
    it('should work', () => {
        cy.visit('http:localhost:3000/app')
        cy.window().its('ST').invoke('replaceReducer', () => state)
        cy.screenshot()
    })
})
