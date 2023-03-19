import NewsletterPageAI from "../page-objects/newsletterPageAI";


describe('Newsletter Subscription', () => {
  const newsletterPageAI = new NewsletterPageAI()

  beforeEach(() => {
    newsletterPageAI.visit()
  })

  it('should successfully subscribe to the newsletter', () => {
    const name = 'John Doe'
    const email = 'johndoe@example.com'

    newsletterPageAI.subscribe(name, email)
    newsletterPageAI.successMessage.should('be.visible')
  })
})