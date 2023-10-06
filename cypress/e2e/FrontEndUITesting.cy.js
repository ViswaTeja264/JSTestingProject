describe('Page Load Test', () => {

    it('Access the Front-end Deployed URL: https://guvi-note-frontend.vercel.app/', () => {

        //Visit The Guvi Goals Webpage
        cy.visit('https://guvi-note-frontend.vercel.app/');

    });

    it('Verify that the landing page loads without any errors', () => {

        //Visit The Guvi Goals Webpage
        cy.visit('https://guvi-note-frontend.vercel.app/');

        //Check Whether We Have Navigated To The Guvi Goals Webpage Or Not
        cy.get('.text-2xl').should('have.text', 'Login');

    });
});

describe('Form Validation', () => {

    beforeEach('BeforeEach Hook For Navigating To Url', () => {

        //Visit The Guvi Goals Webpage
        cy.visit('https://guvi-note-frontend.vercel.app/');

    });

    it('If Click On Login Without Providing Credentials Displays Error Message', () => {

        //Click On The Login Button Without Providing Credentials Shows Error Msg
        cy.get('.py-2').click();

        //Validating The Tooltip Error Message
        cy.get('.mb-4 > .w-full').invoke('prop', 'validationMessage')
        .should('equal', 'Please fill out this field.');

    });

});

describe('Login Test', () => {

    beforeEach('BeforeEach Hook For Login Test', () => {

        //Visit The Guvi Goals Webpage
        cy.visit('https://guvi-note-frontend.vercel.app/');

        //Enter The Email Address In The Email Field
        cy.get('.mb-4 > .w-full').type('viswa@guvi.in');

        //Enter The Password In The Password Field
        cy.get('.relative > .w-full').type('@Viswa264');

        //Click On The Login Button To Successfully Login
        cy.get('.py-2').click();

    });

    it('Should Login To The Guvi Goals Website', () => {

        //Check Whether We Have Logged In Successfully Or Not
        cy.get('.w-44 > .font-bold').should('have.text', 'Guvi Goals');

    });

});

describe('Navigation Test', () => {

    beforeEach('BeforeEach Hook For Login Test', () => {

        //Visit The Guvi Goals Webpage
        cy.visit('https://guvi-note-frontend.vercel.app/');

        //Enter The Email Address In The Email Field
        cy.get('.mb-4 > .w-full').type('viswa@guvi.in');

        //Enter The Password In The Password Field
        cy.get('.relative > .w-full').type('@Viswa264');

        //Click On The Login Button To Successfully Login
        cy.get('.py-2').click();

    });

    it('Click On Various Links And Buttons Within The Application', () => {

        //Click On Goals Tab To Navigate To Goals Section
        cy.get('ul > :nth-child(3) > .text-white').click();

    });

    it('Ensure That The Application Navigates To The Expected Pages', () => {

        //Click On Goals Tab To Navigate To Goals Section
        cy.get('ul > :nth-child(3) > .text-white').click();

        //Check Whether We Have Navigated To Goals Section Successfully
        cy.get('.text-3xl').should('have.text', 'Ticket List');

    });

});

describe('Create Note Test', () => {

    beforeEach('BeforeEach Hook For Login And Personal Notes Tab', () => {

        //Visit The Guvi Goals Webpage
        cy.visit('https://guvi-note-frontend.vercel.app/');

        //Enter The Email Address In The Email Field
        cy.get('.mb-4 > .w-full').type('viswa@guvi.in');

        //Enter The Password In The Password Field
        cy.get('.relative > .w-full').type('@Viswa264');

        //Click On The Login Button To Successfully Login
        cy.get('.py-2').click();

        //Click On The Personal Notes Tab
        cy.get(':nth-child(2) > .text-white').click();

    });

    it('Navigate To The "Create Note" Section', () => {

        //Check Whether We Have Navigated To Personal Goals Section Successfully
        cy.get('.p-8 > .text-xl').should('have.text', 'My Personal Goal');

    });

    it('Fill In The Required Information To Create A New Note.', () => {

        //Click On The Create Goal Button To Create A New Goal
        cy.get('.bg-sky-600').click();

        //Enter The Title Of The Goal
        cy.get('[placeholder="Title"]').type('SDET Testing');

        //Enter The Description Of The Goal
        cy.get('[placeholder="Description"]').type('I Need To Do UI Testing On Guvi Goals Webpage');

    });

    it('Submit The Form', () => {

        //Click On The Create Goal Button To Create A New Goal
        cy.get('.bg-sky-600').click();

        //Enter The Title Of The Goal
        cy.get('[placeholder="Title"]').type('SDET Testing');

        //Enter The Description Of The Goal
        cy.get('[placeholder="Description"]').type('I Need To Do UI Testing On Guvi Goals Webpage');

        //Click On The "Add Goal" Button To Add A New Goal
        cy.get('.mb-6 > .text-white').click();

        cy.wait(3000);

    });

    it('Verify That The New Note Is Displayed Correctly In The List Of Notes', () => {

        //Check Whether The New Note Is Displayed Correctly In The List Of Nodes
        cy.get('td:nth-child(1)').contains('SDET Testing');

    });

});


describe('Create Goal Test', () => {

    beforeEach('BeforeEach Hook For Login Test', () => {

        //Visit The Guvi Goals Webpage
        cy.visit('https://guvi-note-frontend.vercel.app/');

        //Enter The Email Address In The Email Field
        cy.get('.mb-4 > .w-full').type('viswa@guvi.in');

        //Enter The Password In The Password Field
        cy.get('.relative > .w-full').type('@Viswa264');

        //Click On The Login Button To Successfully Login
        cy.get('.py-2').click();

        //Click On The Goals Tab
        cy.get('ul > :nth-child(3) > .text-white').click();

    });

    it('Navigate To The "Create Goal" Section', () => {

        //Check Whether We Have Navigated To Personal Goals Section Successfully 
        cy.get('.text-3xl').contains('Ticket List');

    });

    it('Fill In The Required Information To Create A New Goal', () => {

        //Click On Create Button
        cy.get('.container > .flex > .bg-blue-500').click({force : true});

        //Enter The Title In The Title Field
        cy.get('#title').type('SDET Testing');

        //Enter The Description In The Description Field
        cy.get('#description').type('I Need To Do UI Element Testing On Guvi Goals Website');

        //Enter The DeadLine Date
        cy.get('#deadline').click().type('2000-12-11');

        //Select The CheckBox
        cy.get(':nth-child(6) > .mr-2').click();

    });

    it('Submit The Form', () => {

        //Click On Create Button
        cy.get('.container > .flex > .bg-blue-500').click({force : true});

        //Enter The Title In The Title Field
        cy.get('#title').type('SDET Testing');

        //Enter The Description In The Description Field
        cy.get('#description').type('I Need To Do UI Element Testing On Guvi Goals Website');

        //Enter The DeadLine Date
        cy.get('#deadline').click().type('2000-12-11');

        //Select The CheckBox
        cy.get(':nth-child(6) > .mr-2').click();

        //Click On The Create Button
        cy.get("button[type='submit']").click();

        cy.wait(3000);

    });

    it('Verify That The New Goal Is Displayed Correctly In The List Of Goals', () => {

        //Check Whether The Goal Is Displayed In The List Of Goals
        cy.get('.bg-white > :nth-child(1) > .text-3xl').contains('SDET Testing');

    });

});

describe('Edit Note Test', () => {

    beforeEach('BeforeEach Hook For Login Test And Personal Note Tab', () => {

        //Visit The Guvi Goals Webpage
        cy.visit('https://guvi-note-frontend.vercel.app/');

        //Enter The Email Address In The Email Field
        cy.get('.mb-4 > .w-full').type('viswa@guvi.in');

        //Enter The Password In The Password Field
        cy.get('.relative > .w-full').type('@Viswa264');

        //Click On The Login Button To Successfully Login
        cy.get('.py-2').click();

        //Click On The Personal Notes Tab
        cy.get(':nth-child(2) > .text-white').click();

    });

    it('Choose An Existing Note To Edit', () => {

        //Click On The Edit Button To Edit
        cy.get('.text-blue-500').click();

    });

    it('Make Changes To The Content', () => {

        //Click On The Edit Button To Edit
        cy.get('.text-blue-500').click();

        //Edit The Title Field
        cy.get("input[placeholder='Title']").clear().type('Full Stack Testing');

    });

    it('Save The Changes', () => {

        //Click On The Edit Button To Edit
        cy.get('.text-blue-500').click();

        //Edit The Title Field
        cy.get("input[placeholder='Title']").clear().type('Full Stack Testing');

        //Click On Edit Goal To Save The Changes
        cy.get('.mb-6 > .text-white').click();

        cy.wait(3000);

    });

    it('Verify That The Changes Are Successfully Updated', () => {

        //Check Whether The Changes Are Saved Successfully Or Not
        cy.contains('Full Stack Testing');

    });

});

describe('Edit Goal Test', () => {

    beforeEach('BeforeEach Hook For Login Test And Goal Tab', () => {

        //Visit The Guvi Goals Webpage
        cy.visit('https://guvi-note-frontend.vercel.app/');

        //Enter The Email Address In The Email Field
        cy.get('.mb-4 > .w-full').type('viswa@guvi.in');

        //Enter The Password In The Password Field
        cy.get('.relative > .w-full').type('@Viswa264');

        //Click On The Login Button To Successfully Login
        cy.get('.py-2').click();

        //Click On The Goals Tab
        cy.get('ul > :nth-child(3) > .text-white').click();

    });

    it('Choose An Existing Goal To Edit', () => {

        //Click On The Open Button To Edit
        cy.get('.bg-blue-600').click();

    });

    it('Make Changes To The Content', () => {

        //Click On The Open Button To Edit
        cy.get('.bg-blue-600').click();

        //Edit The Title Field
        cy.get(':nth-child(1) > .w-full').clear().type('Full Stack Testing');

        //Enter The Comments
        cy.get(':nth-child(5) > .w-full').type('Working On It');

    });

    it('Save The Changes', () => {

        //Click On The Open Button To Edit
        cy.get('.bg-blue-600').click();

        //Edit The Title Field
        cy.get(':nth-child(1) > .w-full').clear().type('Full Stack Testing');

        //Enter The Comments
        cy.get(':nth-child(5) > .w-full').type('Working On It');

        //Click On The Update Goal Button To Save The Changes
        cy.get('form > .bg-blue-500').click();

        cy.wait(3000);

    });

    it('Verify That The Changes Are Successfully Updated', () => {

        //Check Whether The Changes Are Saved Successfully Or Not
        cy.contains('Full Stack Testing');

    });

});


describe('Delete Note Test', () => {

    beforeEach('BeforeEach Hook For Login Test And Personal Note Tab', () => {

        //Visit The Guvi Goals Webpage
        cy.visit('https://guvi-note-frontend.vercel.app/');

        //Enter The Email Address In The Email Field
        cy.get('.mb-4 > .w-full').type('viswa@guvi.in');

        //Enter The Password In The Password Field
        cy.get('.relative > .w-full').type('@Viswa264');

        //Click On The Login Button To Successfully Login
        cy.get('.py-2').click();

        //Click On The Personal Notes Tab
        cy.get(':nth-child(2) > .text-white').click();

    });

    it('Choose An Existing Note To Delete', () => {

        cy.wait(3000);

        //selecting The Particular Note To Delete
        //Before Deletion We Need To Check Whether The Note Is Available Or Not
        cy.contains('Full Stack Testing');

    });

    it('Confirm the deletion', () => {

        //Click On Delete To Delete The Note
        cy.get('.text-red-500').click();

        cy.wait(5000);

    });

    it('Verify That The Changes Are Successfully Updated', () => {

        //Check Whether The Changes Are Saved Successfully Or Not
        cy.get('tbody').should('not.contain', 'Full Stack Testing');

    });

});

describe('Delete Goal Test', () => {

    beforeEach('BeforeEach Hook For Login Test And Goal Tab', () => {

        //Visit The Guvi Goals Webpage
        cy.visit('https://guvi-note-frontend.vercel.app/');

        //Enter The Email Address In The Email Field
        cy.get('.mb-4 > .w-full').type('viswa@guvi.in');

        //Enter The Password In The Password Field
        cy.get('.relative > .w-full').type('@Viswa264');

        //Click On The Login Button To Successfully Login
        cy.get('.py-2').click();

        //Click On The Goals Tab
        cy.get('ul > :nth-child(3) > .text-white').click();

    });

    it('Choose An Existing Goal To Delete', () => {

        //selecting The Particular Goal To Delete
        //Before Deletion We Need To Check Whether The Goal Is Available Or Not
        cy.contains('Full Stack Testing');

    });

    it('Save The Changes', () => {

        //Click On The Delete Button To Delete A Goal
        cy.get('.bg-red-700').click();

        cy.wait(3000);

    });

    it('Verify That The Changes Are Successfully Updated', () => {

        //Check Whether The Changes Are Saved Successfully Or Not
        cy.get('.container').should('not.contain', 'Full Stack Testing');

    });

});