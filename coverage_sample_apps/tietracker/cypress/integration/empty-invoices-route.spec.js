import state from '../fixtures/empty-invoices-route.json'

describe('empty-invoices-route', () => {
    it('should work', () => {
        cy.visit('/invoices')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
