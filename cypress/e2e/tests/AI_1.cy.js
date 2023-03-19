describe('Newsletter Subscription', () => {
    it('should successfully subscribe to the newsletter', () => {
      // Open the website
      cy.visit('https://fabrykatestow.pl')
  
      // Click the "ZAPISZ MNIE NA NEWSLETTER!" button
      cy.contains('Newsletter').click()
  
      // Fill in the name input field
      cy.get('input[aria-label="name"]').first().type('John Doe')
  
      // Fill in the email input field
      cy.get('input[aria-label="email"]').first().type('johndoe@example.com')
  
      // Click the "CHCĘ DOŁĄCZYĆ" button
      cy.contains('CHCĘ DOŁĄCZYĆ').click()
  
      // Assert that the success message appears on the page
      cy.contains('Pierwszy mail do Ciebie jest już w drodze!').should('be.visible')
    })
  })