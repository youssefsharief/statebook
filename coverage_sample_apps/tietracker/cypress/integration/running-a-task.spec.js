import state from '../fixtures/running-a-task.json'

describe('running-a-task', () => {
    it('should work', () => {
        cy.visit('/')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
