import { fakeEmail } from '../fixtures/data-provider.json';

describe('first cypress tests', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
  });

  it('types email address and deletes it', () => {
    cy.get('.action-email')
      .type(fakeEmail).should('have.value', fakeEmail)
      .clear()
      .should('have.value', '');
  });
});
