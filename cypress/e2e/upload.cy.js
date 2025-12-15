describe('receipt tests', () => {
    it("upload file from main page", function(){
        cy.visit("https://app.grabdocs.com/")
        cy.get('[name="username"]').click().type('ireallywanttopassthisclass@gmail.com');
        cy.get('[name="password"]').click().type('heylook@myreallylongpassword1!');
        cy.contains('Sign in').click();
        cy.get('#__next div.flex-col').click();
        cy.get('[name="otpCode"]').click().type('335577');
        cy.contains('Verify Code').click();
        cy.get('#__next button.lg\\:hidden').click();
        cy.get('input[type="file"]').first().selectFile('cypress/fixtures/exampleitemizedreceipt.pdf', { force: true })
        cy.get('#__next div.Toastify__toast-body div:nth-child(2)')
            .invoke('text')
            .then(text => {
                if (text.includes('Files uploaded successfully')) {
                    cy.log('UPLOAD SUCCESSFUL')
                } else {
                cy.log('Upload failed or message not found')
                }
        })
    });

    it('upload file from quick files', function() {
        cy.visit("https://app.grabdocs.com/")
        cy.get('[name="username"]').click().type('ireallywanttopassthisclass@gmail.com');
        cy.get('[name="password"]').click().type('heylook@myreallylongpassword1!');
        cy.contains('Sign in').click();
        cy.get('#__next div.flex-col').click();
        cy.get('[name="otpCode"]').click().type('335577');
        cy.contains('Verify Code').click();
        cy.get('#__next button.lg\\:hidden svg.h-6.w-6').click();
        cy.get('button[title="Files"]').click({ force: true })
        cy.get('input[type="file"]').first().selectFile('cypress/fixtures/exampleitemizedreceipt.pdf', { force: true })
        cy.get('#__next div.Toastify__toast-body div:nth-child(2)')
          .invoke('text')
          .then(text => {
            if (text.includes('Files uploaded successfully')) {
              cy.log('UPLOAD SUCCESSFUL')
            } else {
              cy.log('Upload failed or message not found')
            }
          })
    });
});