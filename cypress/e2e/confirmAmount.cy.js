describe('Confirm amount spent from uploaded receipt', () => {
  it('uploads receipt and checks the total amount displayed', () => {
    cy.visit("https://app.grabdocs.com/");
    
    // Log in
    cy.get('[name="username"]').click().type('ireallywanttopassthisclass@gmail.com');
    cy.get('[name="password"]').click().type('heylook@myreallylongpassword1!');
    cy.contains('Sign in').click();

    // OTP flow
    cy.get('#__next div.flex-col').click();
    cy.get('[name="otpCode"]').click().type('335577');
    cy.contains('Verify Code').click();

    // Upload receipt
    cy.get('input[type="file"]').selectFile('cypress/fixtures/exampleitemizedreceipt.pdf');

    // Wait for upload to process
    cy.contains('Upload successful').should('exist');

    // Confirm the amount is shown (adjust based on actual content of your receipt)
    cy.contains('$14.32').should('exist'); // Replace with actual value from your PDF
  });
});
