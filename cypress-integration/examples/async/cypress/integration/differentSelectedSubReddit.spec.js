import state from '../fixtures/differentSelectedSubReddit.json'

describe('differentSelectedSubReddit', () => {
    it('should work', () => {
        cy.visit('/')
        cy.window().its('ST').invoke('replaceReducer', () => state)
    })
    
})
