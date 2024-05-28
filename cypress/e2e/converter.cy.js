describe('Testing Converter Functionalty', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:8888/');
        cy.viewport(1920, 1080)
      })

      it('Converting from hexadecimal to decimal', ()=>{
        cy.get('#error-convert-hex')
        .invoke('text')
        .should('equal', '')
        
        cy.get('#hexToDec-result')
        .invoke('text')
        .should('equal', '')
    
        cy.get('#hexToDec')
        .type('A')
    
        cy.get('#hexToDec-result')
        .invoke('text')
        .should('equal', '10')
    
        cy.get('#hexToDec')
        .type('Z')
    
        cy.get('#hexToDec-result')
        .invoke('text')
        .should('equal', '')
    
        cy.get('#error-convert-hex')
        .invoke('text')
        .should('equal', 'Please enter a valid hexadecimal number')

        cy.get('#hexToDec')
        .clear()

        cy.get('#error-convert-hex')
        .invoke('text')
        .should('equal', 'Please enter a valid hexadecimal number')
      });

      it('Converting from decimal to hexadecimal', ()=>{
        cy.get('#error-convert-dec')
        .invoke('text')
        .should('equal', '')
        
        cy.get('#decToHex-result')
        .invoke('text')
        .should('equal', '')
    
        cy.get('#decToHex')
        .type('Z')
    
        cy.get('#decToHex-result')
        .invoke('text')
        .should('equal', '')
    
        cy.get('#error-convert-dec')
        .invoke('text')
        .should('equal', 'Please enter a valid decimal number')

        cy.get('#decToHex')
        .clear()
        .type('10')
    
        cy.get('#decToHex-result')
        .invoke('text')
        .should('equal', 'A')
      });
});