const mealdb = Cypress.config('baseUrl');

describe('MealDB API Testing (POST Method)', () => {

    it('Should Test On The MealDB Post Method', () => {

        cy.request({

            method : 'POST',
            url : 'http://localhost:3000',
            body : {
                TaskName : "MealDB",
                url  : mealdb
            },
            timeout: 60000

        })
        .then((response) => {

            expect(response.body.results.totalSuites).to.eq(2);
            expect(response.body.results.totalTests).to.eq(7);
            expect(response.body.results.totalPassed).to.eq(7);
            expect(response.body.results.totalFailed).to.eq(0);
            
        });

    });

});