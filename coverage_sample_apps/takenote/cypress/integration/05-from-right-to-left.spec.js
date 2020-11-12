import state from '../fixtures/05-from-right-to-left.json'

describe('05-from-right-to-left', () => {
    it('should work', () => {
        cy.visit('http:localhost:3000/app')
        cy.window().its('ST').invoke('replaceReducer', () => state)
        cy.screenshot()
    })
})
