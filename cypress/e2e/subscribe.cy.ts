describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("allows users to subscribe to the email list", () => {
        cy.get("#email-address").type("tom@aol.com")
        cy.get(".mt-4 > .mt-3").click()
    })
})
