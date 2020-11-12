import state from '../fixtures/01-mark-note-as-favorite.json'

describe('01-mark-note-as-favorite', () => {
    it('should work', () => {
        cy.visit('http:localhost:3000/app')
        cy.window().its('ST').invoke('replaceReducer', () => state)
        cy.screenshot()
    })
})
