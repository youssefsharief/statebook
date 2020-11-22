import state from '../fixtures/backup-once-per-week.json'

describe('backup-once-per-week', () => {
    it('should work', () => {
        cy.visit('/settings')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
