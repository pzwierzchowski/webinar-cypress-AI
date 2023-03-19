class NewsletterPageAI {
    visit() {
      cy.visit('https://fabrykatestow.pl')
    }
  
    get subscribeButton() {
      return cy.contains('Newsletter')
    }
  
    get nameInput() {
      return cy.get('input[aria-label="name"]').first()
    }
  
    get emailInput() {
      return cy.get('input[aria-label="email"]').first()
    }
  
    get joinButton() {
      return cy.contains('CHCĘ DOŁĄCZYĆ')
    }
  
    get successMessage() {
      return cy.contains('Pierwszy mail do Ciebie jest już w drodze!')
    }
  
    subscribe(name, email) {
      this.subscribeButton.click()
      this.nameInput.type(name)
      this.emailInput.type(email)
      this.joinButton.click()
    }
  }

  export default NewsletterPageAI;
