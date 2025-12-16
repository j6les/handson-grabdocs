describe('ask GD Assisstant', () => {    
  it('asks price of item', () => {
    cy.visit("https://app.grabdocs.com/")
    cy.get('[name="username"]').click().type('ireallywanttopassthisclass@gmail.com');
    cy.get('[name="password"]').click().type('heylook@myreallylongpassword1!');
    cy.contains('Sign in').click();
    cy.get('#__next div.flex-col').click();
    cy.get('[name="otpCode"]').click().type('335577');
    cy.contains('Verify Code').click();
    cy.get('#__next textarea.w-full').click();
    cy.get('#__next textarea.w-full').type('@ex');
    cy.get('#__next button.bg-gray-100 div.truncate').click();
    cy.get('#__next textarea.w-full').click();
    cy.get('#__next textarea.w-full').type('Tell me the price of a Wireless Keyboard from this document.{enter}');
  })
})
