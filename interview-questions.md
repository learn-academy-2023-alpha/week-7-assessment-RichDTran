# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:In the rails console we would use Cohort_id.create. The name of the foreign key will always be the modelname_id. It would be on the Cohort because that holds the foreign key and belongs_to would be the Student Model.

Researched answer:One model will belong to another model by belongs_to. and for many econnections with another model we use has_many this way why can create the foreign key if we forgot too.

2. Which RESTful routes must always be passed params? Why?

Your answer:CRUD = Create, Read, Update, and Delete because this is the main structure needed for the backend development. So users/developers are able to create new data, and able to view (read) the data, make changes(update) to the data, and finally remove(delete) data.

Researched answer: GET, PUT, POST, PATCH, TRACE,  AND DELETE
to be able to access that value and creates a path for these routes to be used. YOu may have as many parameters as you want.

3. Name three rails generator commands. What is created by each?

Your answer: 
$rails generate model title name_colum:string/integer name_column:string/integer
This generated a database model with a title input and name colums and their datatypes.

$rails generate controller
This creates a controller ruby files: views/helpers/ and assets and is added into your ruby rails application without manually doing it based off the model created.

$rails generate resource
This creates a backend database model for backend developement to work without ever needing the front end. This does what rails generate model does except its a resource database.


Researched answer:
$rails generate model is a ruby class that is used to represent data. It can interact with applications database on Rails called Active Record.

$rails generate resource produces main function neccessary without long lines of code. It automaticall creates RESTful routes which are essential to perform CRUD actions and to be available to the controller.

$rails generate controller makes sure directories are in the application and created a controller file, view file, a test file, a helper file, J.S file and a style sheet file.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Students.all
SHOW This would perform to display all the data related to the students database.

action: "POST" location: /students
CREATE
This would create new data implemented into the database and be given its own unique id.

action: "GET" location: /students/new
SHOW
This would show the data in the Student database under the new category and display only that data

action: "GET" location: /students/2
SHOW
This will show Student data with unique id 2 and display the information stored

action: "GET" location: /students/2/edit
UPDATE
This will show Student data unique id 2 and the ability to change or modify that specific data

action: "PATCH" location: /students/2
PUT
This provides ability to modify partial data
action: "DELETE" location: /students/2
DESTROY
This will destroy data from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


To do list:

1.Create that backend database data labeled as Priority, timeframe, title of to do, details, and done or not done or progress.
2. Make sure RESTful routes are valid and working along with essentials like CRUD.
3. Provide fuctionality on the frontend using javascript:
4. Create a function where users are able to perform CRUD on front-end.
5. Create buttons and onclicks for users accessbility.
6. Ability to locate or read database from the back end to the front. Basically see what the to do list is.
7. CSS User is able to look at a pleasing to the eye application.
8. Provide security barriers for the back end and front end "private"
9. Create a contact me section
10. **EPIC story : Application Management to do list ** <----The teams goal>