import state from '../fixtures/02-add-new-category.json'

describe('02-add-new-category', () => {
    it('should work', () => {
        cy.visit('http:localhost:3000/app')
        cy.window().its('ST').invoke('replaceReducer', () => state)
        cy.screenshot()
    })
})
