import state from '../fixtures/one-open-invoice-invoices-route.json'

describe('one-open-invoice-invoices-route', () => {
    it('should work', () => {
        cy.visit('/invoices')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
})
