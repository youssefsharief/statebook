import state from '../fixtures/initialStateAfterLoad.json'

describe('initialStateAfterLoad', () => {
    it('should work', () => {
        cy.visit('/')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
