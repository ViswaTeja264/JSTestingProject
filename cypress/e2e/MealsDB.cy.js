const mealdb = Cypress.config('baseUrl');

describe('Testing The Meals Webpage', () => {

    it('Navigate To The Meals WebPage', () => {

        //Navigate To The Meals Webpage
        cy.visit(mealdb);

        //Checking Whether We Have Successfully Navigated Or Not
        cy.get('.head-text').should('have.text', 'MealsDB');

    });

    it('If Clicked On Search Without Providing Text In Search Box, Results Into Alert', () => {

        //Navigate To The Meals Webpage
        cy.visit(mealdb);

        //Checking Whether The Text Is Empty Or Not
        cy.get('.input-text').should('have.text', "");

        //Clicking On The Search Button
        //It Will Open Alert Box
        cy.get('.search').click();

        cy.on('window:alert', (text) => {
            expect(text).to.equal("no recipee found");
        });

    });

    it('Search For A Particular Meal', () => {

        //Navigate To The Meals Webpage
        cy.visit(mealdb);

        //Searching For Chicken
        cy.get('.input-text').type('Chicken');

        //Clicking On The Search Button
        cy.get('.search').click();

        //Checking Whether We Get The Desired Results Or Not
        cy.get('.displayItems > :nth-child(1) > .text-center').should('contain', 'Chicken');
        cy.get(':nth-child(4) > .text-center').should('contain', 'Chicken');
        cy.get(':nth-child(7) > .text-center').should('contain', 'Chicken');

    });

    it('Click On The Particular Meal To Navigate To The Youtube Video', () => {

        //Navigate To The Meals Webpage
        cy.visit(mealdb);

        //Searching For Chicken
        cy.get('.input-text').type('Chicken');

        //Clicking On The Search Button
        cy.get('.search').click();

        //Clicking On The Tandoori Chicken
        //It Will Navigate To Tandoori Chicken Youtube Video
        cy.get(':nth-child(5) > .recipe > .link').click();

    });

});

describe('Check The Webpage To Be Responsive', () => {

    it('Should Open In ipad-2', () => {

        //Navigate To The Meals Webpage
        cy.visit(mealdb);

        //Should Open In ipad-2
        cy.viewport('ipad-2');

        cy.get('.head-text').should('contain', 'MealsDB');

    });

    it('Should Open In Iphone-11', () => {

        //Navigate To The Meals Webpage
        cy.visit(mealdb);

        //Should Open In iphone-x
        cy.viewport('iphone-x');

        cy.get('.head-text').should('contain', 'MealsDB');

    });

    it('Should Open In Custom Dimensions', () => {

        //Navigate To The Meals Webpage
        cy.visit(mealdb);

        //Give Custom Dimensions
        cy.viewport(648, 938);

        cy.get('.head-text').should('contain', 'MealsDB');

    });

});

