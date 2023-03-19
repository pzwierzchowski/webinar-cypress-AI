import NewsletterPageAI from "../page-objects/newsletterPageAI";


describe('Newsletter Subscription', () => {
  const newsletterPageAI = new NewsletterPageAI()

  beforeEach(() => {
    newsletterPageAI.visit()
  })

  it('should successfully subscribe to the newsletter', () => {
    newsletterPageAI.subscribe('John Doe', 'johndoe@example.com')
    newsletterPageAI.successMessage.should('be.visible')
  })
})