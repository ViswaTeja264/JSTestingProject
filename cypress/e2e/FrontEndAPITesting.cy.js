import { faker } from '@faker-js/faker';

//For Authorized Token
let authToken;

//For Creating New User
let username = faker.internet.userName();
let email = faker.internet.email();
let password = faker.internet.password();

//For Sending OTP To Registered Email And Creating New Password
let registeredEmail;

//For Generating NewPassword We Store The OTP In A Variable
let storedOTP;

//For Editing And Deleting The Todo
let todoId;
let todoTitle;
let todoDescription;


describe('Register Route API Testing', () => {

  it('Successful Registration', () => {

    const requestBody = {
      username: username,
      email: email,
      password: password
    };

    cy.request({
      method: 'POST',
      url: 'https://guvi-goal-backend.onrender.com/auth/register',
      body: requestBody,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      // expect(response.body).to.eq('User registered successfully');
    });

  });

  it("Registration With Existing Email", () => {

    // Attempt To Register With The Same Email Again
    const newUserWithExistingEmail = {
      username: username,
      email: "viswa@guvi.in",
      password: password
    };

    cy.request({
      method: 'POST',
      url: 'https://guvi-goal-backend.onrender.com/auth/register',
      body: newUserWithExistingEmail,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq('User already exist');
    });

  });

});


describe('Login Route API Testing', () => {

  it('Successful Login', () => {

    const validCredentials = {
      email: 'viswa@guvi.in',
      password: '@Viswa264',
    };

    cy.request({
      method: 'POST',
      url: 'https://guvi-goal-backend.onrender.com/auth/login',
      body: validCredentials,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
      expect(response.body.message).to.eq("Login Successfully");

      authToken = response.body.token;
    });

  });

});


describe('Get All Users Route API Testing', () => {

  it('Successful Retrieval of All Users', () => {

    cy.request({
      method: 'GET',
      url: 'https://guvi-goal-backend.onrender.com/auth/get-all',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);

      registeredEmail = response.body.users[5].email;
    });

  });

});


describe('Send Reset OTP Route API Testing', () => {

  it('Successful OTP Generation and Email Sending', () => {

    const validEmail = {
      email: registeredEmail,
    };

    cy.request({
      method: 'POST',
      url: 'https://guvi-goal-backend.onrender.com/auth/send-reset-otp',
      body: validEmail,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Password reset OTP sent.");

      storedOTP = response.body.generatedOTP;
    });

  });

});


describe('Reset Password with OTP Route API Testing', () => {

  it('Successful Password Reset', () => {

    const validResetRequest = {
      email: registeredEmail,
      otp: storedOTP,
      newPassword: faker.internet.password(),
    };

    cy.request({
      method: 'POST',
      url: 'https://guvi-goal-backend.onrender.com/auth/reset-password',
      body: validResetRequest,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);

    });

  });

  it('Reset Password with Invalid OTP', () => {

    const invalidResetRequest = {
      email: registeredEmail,
      otp: faker.datatype.number({ min: 100000, max: 999999 }),
      newPassword: faker.internet.password(),
    };

    cy.request({
      method: 'POST',
      url: 'https://guvi-goal-backend.onrender.com/auth/reset-password',
      body: invalidResetRequest,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });

  });

});


describe('Get All Personal Todos Route API Testing', () => {

  it('Successful Retrieval of Personal Todos', () => {

    cy.request({
      method: 'GET',
      url: 'https://guvi-goal-backend.onrender.com/personal/personal-todos',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });

  });

});


describe('Create Personal Todo Route API Testing', () => {

  it('Successful Creation of Personal Todo', () => {

    const validTodoData = {
      userId: faker.database.mongodbObjectId(),
      title: faker.lorem.words({ min: 1, max: 3 }),
      description: faker.lorem.words(10)
    };

    cy.request({
      method: 'POST',
      url: 'https://guvi-goal-backend.onrender.com/personal/create-todo',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: validTodoData,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq('Personal todo created successfully');

      todoId = response.body.todo._id;
      todoTitle = response.body.todo.title;
      todoDescription = response.body.todo.description;
    });

  });

  it('Unauthorized Creation', () => {

    const invalidTodoData = {
      userId: faker.database.mongodbObjectId(),
      title: faker.lorem.words({ min: 1, max: 3 }),
      description: faker.lorem.words(10)
    };

    cy.request({
      method: 'POST',
      url: 'https://guvi-goal-backend.onrender.com/personal/create-todo',
      headers: {
        Authorization: `Bearer ${authToken + '0'}`,
      },
      body: invalidTodoData,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq('Invalid token');
    });

  });

});


describe('Edit Personal Todo Route API Testing', () => {

  it('Successful Edit of Personal Todo', () => {

    const updatedTodoData = {
      title: todoTitle + 'Updated',
      description: todoDescription + 'Updated'
    };

    cy.request({
      method: 'PUT',
      url: `https://guvi-goal-backend.onrender.com/personal/edit-todo/${todoId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: updatedTodoData,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq('Personal todo updated successfully');
    });

  });

  it('Unauthorized Edit', () => {

    const updatedTodoData = {
      title: todoTitle + 'Updated',
      description: todoDescription + 'Updated'
    };

    cy.request({
      method: 'PUT',
      url: `https://guvi-goal-backend.onrender.com/personal/edit-todo/${todoId}`,
      headers: {
        Authorization: `Bearer ${authToken + '0'}`,
      },
      body: updatedTodoData,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq('Invalid token');
    });

  });

});


describe('Delete Personal Todo Route API Testing', () => {

  it('Successful Deletion of Personal Todo', () => {

    cy.request({
      method: 'DELETE',
      url: `https://guvi-goal-backend.onrender.com/personal/delete-todo/${todoId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq('Personal todo deleted successfully');
    });

  });

  it('Unauthorized Deletion', () => {

    cy.request({
      method: 'DELETE',
      url: `https://guvi-goal-backend.onrender.com/personal/delete-todo/${todoId}`,
      headers: {
        Authorization: `Bearer ${authToken + '0'}`,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq('Invalid token');
    });

  });

});