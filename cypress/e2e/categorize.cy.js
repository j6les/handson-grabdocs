describe('categorize', () => {
  it('categorizes receipts in quick files', () => {
      cy.visit("https://app.grabdocs.com/")
      cy.get('[name="username"]').click().type('ireallywanttopassthisclass@gmail.com');
      cy.get('[name="password"]').click().type('heylook@myreallylongpassword1!');
      cy.contains('Sign in').click();
      cy.get('#__next div.flex-col').click();
      cy.get('[name="otpCode"]').click().type('335577');
      cy.contains('Verify Code').click();
      cy.get('#__next button.lg\\:hidden svg.h-6.w-6').click();
      cy.get('button[title="Files"]').click({ force: true })
      cy.get('#__next div:nth-child(1) > div.justify-between > div.space-x-3 > div:nth-child(3) > div.flex > button.inline-flex').click();
      cy.get('#__next select.w-full').select('Supplies');
      cy.get('#__next div.justify-end button.text-white.text-sm.font-medium').click();
      cy.get('#__next div:nth-child(2) > div.justify-between > div.space-x-3 > div:nth-child(3) > div.flex > button.inline-flex').click();
      cy.get('#__next select.w-full').select('Rent and Lease');
      cy.get('#__next div.justify-end button.text-white.text-sm.font-medium').click();
      cy.get('#__next div:nth-child(3) div.justify-between div.space-x-3 div:nth-child(3) div.flex button.inline-flex').click();
      cy.get('#__next select.w-full').select('Banking');
      cy.get('#__next div.justify-end button.text-white.text-sm.font-medium').click();
  })
})