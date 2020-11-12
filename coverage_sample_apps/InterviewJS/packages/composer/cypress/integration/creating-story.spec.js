
import state from '../fixtures/creating-story.json'

describe('creating-story', () => {
    it('should work', () => {
        cy.viewport(1500, 1500)
        cy.visit('/')
        cy.window().its('ST').invoke('replaceReducer', () => state)
        cy.get('.ReactModal__Content button i').click()
        cy.get('.ReactModal__Content button i').click()
        cy.screenshot()
    })
})
