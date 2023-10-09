> My MealDB Project Details

This Project Is Mainly Focused On Testing The MealDB WebPage FrontEnd And Api Testing

For Creating The TestCases We Need To Install Cypress From npm package

Command To Install : npm install cypress

Here We Need To Send The Post Request To The NodeJS Server Which Is Connected To The Port : 3000

To run The Server We Need To Install Express And NodeJS

Command To Install : npm install express

We Need To Create A Schema For Our Data To Store In Database

For Creating A Schema We Need To Install Mongoose

Command To Install : npm install mongoose

We Store the Final Results In MongoDB So That We Need To Install MongoDB

Command To Install : npm install mongodb

-----> After Installing All The Dependencies We Will Work On The Flow Of Our Project   <-----

Firstly The Server Starts From "www.js" File In Port No : 3000   //[https:Local](http://localhost:3000/)

Here My www.js File Will Connect to app.js Where The Routes And BodyParser Are Used

Now We Create A Routes For The Post Request With The Server, These Routes Will Connect To The Corresponding Controller Methods

Controller Methods Consists Of Our Main Business Logics Where It has Connect To Our Schema And Fixtures Files

Based On Our Business Logics The Corresponding Cypress TestCases Will Up And Running

After My TestCases Got Triggered And Runned Successfully Cypress Will Create A JSON Test Results.

This JSON Results Consists Of How Many Tests Suites, Passed, Failed, Pending And Details Of The Each Tests

Now We Store These JSON Results Into The MongoDB Based On The Schema We Provided.
