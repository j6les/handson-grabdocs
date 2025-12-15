import 'cypress-file-upload';

describe('Upload Receipt Test', () => {
  it('uploads a receipt and confirms upload success', () => {
    cy.visit('http://127.0.0.1:8081');

    // Upload the file
    cy.get('#upload-input').attachFile('receipt.png');

    // Submit the form
    cy.get('#submit-button').click();

    // Confirm success message is present
    cy.get('#upload-status').should('exist'); // or 'be.visible' if the element fades in
  });
});