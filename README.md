# Assignment 2 - Web Application Development.

# Missing Paws

Name: Mozeeb Abdulha

Student number: 20075835

## Client UI.

![][homepage]

>>Gives information to the user about what they can do on the site

![][petslist]

>>Displays all the missing pets in a table

![][managepets]

>>Owners of the pets can edit their pets details or remove the pet

![][reportpet]

>>Allows the owners to report a missing pet in order to get help to find it

![][edit]

>>Allows the owners only to edit information about their pets

![][login]

>>Allows users who have already registered login and add their pets

![][register]

>>Allows users to make an account to the app

## Data model.

 -- Owner Schema --

~~~

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phoneNum: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    }

~~~

 -- Sample output --

 ~~~
    {
          "_id": "5dbc702ea8fdae1870ce2137",
          "firstname": "Mozeeb",
          "lastname": "Abdulha",
          "phoneNum": "0123456789",
          "email": "ma@gmail.com",
          "__v": 0
     }
 ~~~

 -- Pet Schema --

~~~

    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    colour: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    lastSeenAddress: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0,
        required: true
    },
    missing: {
        type: Boolean,
        default: true
    },
    ownerID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "owners"
    }

~~~

 -- Sample output --

 ~~~
    {
          "views": 0,
          "missing": true,
          "_id": "5dbc705ffe4a240b8ce14622",
          "name": "Charlie",
          "type": "Dog",
          "species": "Pitbull",
          "gender": "Male",
          "colour": "black",
          "size": 26,
          "age": "Less than 5 years",
          "lastSeenAddress": "12 Walking Street, Waterford",
          "ownerID": "5db4bbff17b11a286ca06200",
          "__v": 0
    }
 ~~~

## E2E/Cypress testing.

This web app is tested using cypress.

## Web API CI.

https://mabdulha.gitlab.io/-/missing-paws-api-cicd/-/jobs/376119164/artifacts/coverage/lcov-report/index.html

## GitLab CI.

Made video recordings of the running tests with in gitlab-ci.yml
Deployment to firebase


[homepage]: ./img/homepage.png
[petslist]: ./img/petslist.png
[managepets]: ./img/managepets.png
[reportpet]: ./img/reportpet.png
[edit]: ./img/edit.png
[login]: ./img/login.png
[register]: ./img/register.png