import state from '../fixtures/06-sidebar-not-visible.json'

describe('06-sidebar-not-visible', () => {
    it('should work', () => {
        cy.visit('http:localhost:3000/app')
        cy.window().its('ST').invoke('replaceReducer', () => state)
        cy.screenshot()
    })
})
