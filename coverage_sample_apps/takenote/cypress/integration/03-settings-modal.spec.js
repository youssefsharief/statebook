import state from '../fixtures/03-settings-modal.json'

describe('03-settings-modal', () => {
    it('should work', () => {
        cy.visit('http:localhost:3000/app')
        cy.window().its('ST').invoke('replaceReducer', () => state)
        cy.screenshot()
    })
})
