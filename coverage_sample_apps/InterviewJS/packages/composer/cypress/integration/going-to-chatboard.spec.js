
import state from '../fixtures/going-to-chatboard.json'

describe('going-to-chatboard', () => {
    it('should work', () => {
      cy.viewport(1500, 1500)
      cy.visit('/stories/gsuhMjDrksWou4qqJRrMCb')
      cy.window().its('ST').invoke('replaceReducer', () => state)
      cy.screenshot()    })
})
