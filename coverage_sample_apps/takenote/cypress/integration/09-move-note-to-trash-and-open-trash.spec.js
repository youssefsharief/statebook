import state from '../fixtures/09-move-note-to-trash-and-open-trash.json'

describe('09-move-note-to-trash-and-open-trash', () => {
    it('should work', () => {
        cy.visit('http:localhost:3000/app')
        cy.window().its('ST').invoke('replaceReducer', () => state)
        cy.screenshot()
    })
})
