const portfolio = Cypress.config('baseUrl');

describe('Testing The Portfolio Webpage', () => {

    it('Navigate To The Portfolio Webpage', () => {

        cy.viewport(1200, 660);

        //Navigate To The Portfolio Webpage
        cy.visit(portfolio);

        //Checking Whether We Have Successfully Navigated Or Not
        cy.get('.home__title > :nth-child(1)').should('have.text', "I'm Udhayasoorian");
        
    });

    it('Clicking On Zen Dashboard Card Should Opens A Modal', () => {

        cy.viewport(1200, 660);

        //Navigate To The Portfolio Webpage
        cy.visit(portfolio);

        //Click On The Zen Dashboard Card
        cy.get(':nth-child(1) > .portfolio__hover').click();

        //Check Whether The Modal Opens Or Not
        cy.get('.modal__title').should('have.text', 'Zen Dashboard');
    });

    it('Click On The GitHub Link Inside the Zen Dashboard Modal', () => {

        cy.viewport(1200, 660);

        //Navigate To The Portfolio Webpage
        cy.visit(portfolio);

        //Click On The Zen Dashboard Card
        cy.get(':nth-child(1) > .portfolio__hover').click();

        //Click On The GitHub Link
        cy.get(':nth-child(2) > .modal__item > div > .item__details > a').click();
    });

    it('Accessing Elements In GitHub Page Which Is Opened In New Tab', () => {

        cy.viewport(1200, 660);

        //Navigate To The Portfolio Webpage
        cy.visit(portfolio);

        //Click On The Zen Dashboard Card
        cy.get(':nth-child(1) > .portfolio__hover').click();

        //Click On The GitHub Link
        cy.get(':nth-child(2) > .modal__item > div > .item__details > a').click();

        //Navigation To New Tab
        cy.window().then((win) => {
            win.open('https://github.com/Suriya-K7/Zen-class-student-dashboard-frontend', '_blank');
            win.focus();
          });
          
          // Switch to the new tab
          cy.visit('https://github.com/Suriya-K7/Zen-class-student-dashboard-frontend');

          cy.origin('https://github.com/Suriya-K7/Zen-class-student-dashboard-frontend', () => {
            cy.get("p[dir='auto']").should('have.text', 'I developed an exceptional student dashboard for ZEN class, empowering students to attend classes, submit assignments, raise queries, and request leaves. Mentors can effortlessly assess tasks for evalutation using their login credentials.');
          });
          
    })

});