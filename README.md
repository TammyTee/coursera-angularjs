# coursera-angularjs
This is a repository for the Coursera.org course Single-Paged Web Applications with AngularJS
taught by Yaakov Chaikin (John Hopkins University, Whiting School of Engineering).

## Modules 

Description of lessons/practices learned in each module with link to working example.

### Module 1 - AngularJS Basics, Dependency Injection, and Interpolation

##### Lessons
+ How to protect your code from minification using the `$inject` property. 
+ Use an IIFE (Immediately Invoked Function Expression) to keep variables, objects, and functions
from leaking into the global scope.
+ Controller As syntax
+ Expressions and interpolation


##### General Idea

Create a front end application that allows the user to input a comma separated list of items
into an input field. If the list has more than the allowed number of items display a "Too Much!"
to the user; otherwise "Enjoy!"

Module Solution: https://tammytee.github.io/coursera-angularjs/module-1/

### Module 2 - Filters, Digest Cycle, Controller Inheritance, and Custom Services

##### Lessons

+ How to create custom services that allow access to singleton objects to use throughout the
application/ in different controllers.
+ Loop over items in either list using the `ng-repeat` directive.
+ To display messages when list(s) are empty using `ng-if`.

##### General Idea

Create a single page shopping list application that allows a user to add items to their list. Each 
item should have a "Bought" button next to it and when it is clicked that item should move to the
Bought List.

Module Solution: https://tammytee.github.io/coursera-angularjs/module-2/

### Module 3 - Promises, Ajax, and Custom Directives

##### Lessons
+ How to declare and create custom directives (for this module, the custom directive is the table of 
results the user sees).
+ How to utilize the angular `$http` service to access REST Endpoints.
+ To declare a constant on your angular module using the `.constants()` method when you have parts
of your code that may be repeated, but will not change throughout (i.e. the base path for an API).

##### General Idea
Create a single page application that allows a user to search restaurant menu items retrieved from a 
REST API. When the user enters a keyword, the results returned should be those whose description
contain the search term. If no results match then a message should be displayed to the user. A user
should also be able to remove items from the returned results list.

Module Solution: https://tammytee.github.io/coursera-angularjs/module-3/

### Module 4 - Components, Events, Modules, and Routing

##### Lessons
+ How to create components and make use of component based architecture.
+ Understand the difference between `ngRoute` and `ui-router`.
+ Learn single page routing with `ui-router` and handle data with routing.
+ How to use the AngularJS Events System to publish and subscribe to events.

##### General Idea
Create a single page application with 3 views (home, categories, and items) utilizing 
restaurant menu data retrieved from a REST API. Use the `$stateParams` service to retrieve
paramaters from the URL to show the user the correct menu items when a menu category is 
selected.

Module Solution: https://tammytee.github.io/coursera-angularjs/module-4/#/
