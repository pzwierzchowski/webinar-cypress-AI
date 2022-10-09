
const nameField = 'input[aria-label="name"]'
const emailField = 'input[aria-label="email"]'
const submitButton = 'button[type="submit"]'
const successInfo = 'div[class="ml-form-successContent"]'

class NewsletterPage {

    fillFirstNameField(){
        cy.get(nameField).eq(0).type('Pawel');
    }

    fillFirstEmailField(){
        cy.get(emailField).eq(0).type('pawel@fabrykatestow.pl');
    }

    clickFirstSubmitButton(){
        cy.get(submitButton).eq(0).click();
    }

    checkTextAfterSubmit(){
        cy.get(successInfo).contains('Pierwszy mail do Ciebie jest już w drodze!').should('be.visible')
    }

    fillSecondNameField(){
        cy.get(nameField).eq(0).type('Pawel');
    }

    fillSecondEmailField(){
        cy.get(emailField).eq(0).type('pawel@fabrykatestow.pl');
    }

    clickSecondSubmitButton(){
        cy.get(submitButton).eq(0).click();
    }
}

export default NewsletterPage;