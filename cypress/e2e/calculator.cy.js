describe('Testing Calculator Functionalty', () => {

  beforeEach(()=>{
    cy.visit('http://localhost:8888/');
    cy.viewport(1920, 1080)
  })

  it('Opening the application and testing all input & output values', () => {
    cy.get('#result')
    .should('be.disabled');

    cy.get('#result')
    .should('have.value', '');

    cy.get('#error-result')
    .invoke('text')
    .should('equal', '')
  })

  it('Testing all hexadecimal value buttons', ()=>{
    cy.get('[data-operation="0"]')
    .click();

    cy.get('#result')
    .should('have.value', '0');

    cy.get('[data-operation="1"]')
    .click();

    cy.get('#result')
    .should('have.value', '01');

    cy.get('[data-operation="2"]')
    .click();

    cy.get('#result')
    .should('have.value', '012');

    cy.get('[data-operation="3"]')
    .click();

    cy.get('#result')
    .should('have.value', '0123');

    cy.get('[data-operation="4"]')
    .click();

    cy.get('#result')
    .should('have.value', '01234');

    cy.get('[data-operation="5"]')
    .click();

    cy.get('#result')
    .should('have.value', '012345');

    cy.get('[data-operation="6"]')
    .click();

    cy.get('#result')
    .should('have.value', '0123456');

    cy.get('[data-operation="7"]')
    .click();

    cy.get('#result')
    .should('have.value', '01234567');

    cy.get('[data-operation="8"]')
    .click();

    cy.get('#result')
    .should('have.value', '012345678');

    cy.get('[data-operation="9"]')
    .click();

    cy.get('#result')
    .should('have.value', '0123456789');

    cy.get('[data-operation="A"]')
    .click();

    cy.get('#result')
    .should('have.value', '0123456789A');

    cy.get('[data-operation="B"]')
    .click();

    cy.get('#result')
    .should('have.value', '0123456789AB');

    cy.get('[data-operation="C"]')
    .click();

    cy.get('#result')
    .should('have.value', '0123456789ABC');

    cy.get('[data-operation="D"]')
    .click();

    cy.get('#result')
    .should('have.value', '0123456789ABCD');

    cy.get('[data-operation="E"]')
    .click();

    cy.get('#result')
    .should('have.value', '0123456789ABCDE');

    cy.get('[data-operation="F"]')
    .click();

    cy.get('#result')
    .should('have.value', '0123456789ABCDEF');

  });

  it('Testing all operator buttons', ()=>{
    cy.get('[data-operation="clear"]')
    .click();

    cy.get('[data-operation="("]')
    .click();

    cy.get('#result')
    .should('have.value', '(');

    cy.get('[data-operation=")"]')
    .click();

    cy.get('#result')
    .should('have.value', '()');

    cy.get('[data-operation="/"]')
    .click();

    cy.get('#result')
    .should('have.value', '()/');

    cy.get('[data-operation="*"]')
    .click();

    cy.get('#result')
    .should('have.value', '()/*');

    cy.get('[data-operation="-"]')
    .click();

    cy.get('#result')
    .should('have.value', '()/*-');

    cy.get('[data-operation="+"]')
    .click();
    
    cy.get('#result')
    .should('have.value', '()/*-+');

    cy.get('[data-operation="del"]')
    .click();

    cy.get('#result')
    .should('have.value', '()/*-');
  });

  it('Testing equals button', ()=>{
    cy.get('[data-operation="8"]')
    .click();

    cy.get('[data-operation="A"]')
    .click();

    cy.get('[data-operation="B"]')
    .click();

    cy.get('[data-operation="+"]')
    .click();

    cy.get('[data-operation="1"]')
    .click();

    cy.get('[data-operation="="]')
    .click();

    cy.get('#result')
    .should('have.value', '8AC');
  });

  it('Testing error messages', ()=>{
    cy.get('[data-operation="clear"]')
    .click();

    cy.get('[data-operation="8"]')
    .click();

    cy.get('[data-operation="A"]')
    .click();

    cy.get('[data-operation="B"]')
    .click();

    cy.get('[data-operation="B"]')
    .click();

    cy.get('[data-operation="="]')
    .click();

    cy.get('#error-result')
    .invoke('text')
    .should('equal', 'Please input numbers consisting of 3 characters or less')
  });
})