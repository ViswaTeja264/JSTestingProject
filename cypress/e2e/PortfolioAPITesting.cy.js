const portfolio = Cypress.config('baseUrl');

describe('Portfolio API Testing (POST Method)', () => {

    it('Should Test On The Portfolio Post Method', () => {

        cy.request({

            method : 'POST',
            url : 'http://localhost:3000',
            body : {
                TaskName : "Portfolio",
                url  : portfolio
            }

        })
        .then((response) => {

            expect(response.body.results.totalSuites).to.eq(1);
            expect(response.body.results.totalTests).to.eq(4);
            expect(response.body.results.totalPassed).to.eq(4);
            expect(response.body.results.totalFailed).to.eq(0);
            
        });

    });

})