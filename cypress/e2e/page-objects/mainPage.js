import Urls from "./urls";

const newsletterButton = 'li[id="menu-item-923"]'


class MainPage {

    visitPage(){
        const Url = new Urls();
        Url.visitMainPage();
    }

    clickNewsletterButton(){
        cy.get(newsletterButton).click();
    }
}

export default MainPage;