import NewsletterPage from "../page-objects/newsletterPage";
import MainPage from "../page-objects/mainPage"


describe('TS1 - Check newsletter flow', () => {
    it('should subscribe to the newsletter with first option', function () {
        const mainPage = new MainPage();
        mainPage.visitPage();
        mainPage.clickNewsletterButton();
        cy.url({ timeout: 10000 }).should('eq', (Cypress.config().baseUrl + '/ciekawostki/'))

        const newsletterPage = new NewsletterPage();
        newsletterPage.fillFirstNameField();
        newsletterPage.fillFirstEmailField();
        newsletterPage.clickFirstSubmitButton();
        newsletterPage.checkTextAfterSubmit();
    });
   
    
    it('should subscribe to the newsletter with second option', function () {
        const mainPage = new MainPage();
        mainPage.visitPage();
        mainPage.clickNewsletterButton();        
        cy.url({ timeout: 10000 }).should('eq', (Cypress.config().baseUrl + '/ciekawostki/'))
       
        const newsletterPage = new NewsletterPage();
        newsletterPage.fillSecondNameField();
        newsletterPage.fillSecondEmailField();
        newsletterPage.clickSecondSubmitButton();
        newsletterPage.checkTextAfterSubmit();
    });


    it('should make requests to httpstat', function () {
        cy.request('http://httpstat.us/200')
        
        cy.request(
           {
            url: 'http://httpstat.us/404',
            failOnStatusCode : false
           })

        cy.request(
           {
            url: 'http://httpstat.us/500',
            failOnStatusCode : false
           }).then(
            (response) => {
                const body = response.body
                cy.log(body)
                expect(response.status).to.eq(500)
            })              
    });
});