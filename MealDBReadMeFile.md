My MealDB Project Details

This Project Is Mainly Focused On Testing The MealDB WebPage FrontEnd And Api Testing

For Creating The TestCases We Need To Install Cypress From npm package

Command To Install : npm install cypress

Here We Need To Send The Post Request To The NodeJS Server Which Is Connected To The Port : 3000

We Will Pass The Request Body As TaskName And URL Here

Based On The TaskName That We Have Provided That Particualr Cypress TestCases Will Run

In This Case We Pass The TaskName As "MealDBUI" So That My MealDB UI TestCases Will Up And Run.

Now We Pass The MealDB URl So That My TestCases Will Navigate To That URl And Do UI Testing.

After My TestCases Got Triggered And Runned Successfully Cypress Will Create A JSON Test Results

This JSON Results Consists Of How Many Tests Suites, Passed, Failed, Pending And Details Of The Each Tests

Now We Store These JSON Results Into The MongoDB
