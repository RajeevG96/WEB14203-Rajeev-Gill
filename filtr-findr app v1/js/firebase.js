console.log("firebase.js ready to roll")

//connect to the firebase DB

// Initialize Firebase

var config = {
    apiKey: "AIzaSyDqCowWm_tfPP6BlQZIWiRCWzSwsD1dnFM",
    databaseURL: "https://dynamic-web-template-e91d4.firebaseio.com"
};

firebase.initializeApp(config);

//this is the whole database
var database = firebase.database();

//this specifies only the 'people' part of the database
var PeopleDatabase = database.ref('people');

//load all the children of "people"
//keep listening for new children

PeopleDatabase.on('child_added', function (childData) {
    //run these instructions for each child e.g. each person within people db
    console.log(childData.val());
    var person = childData.val(); //extract data about the person
    peopleList.push(person); //add person to people list
});

//variable to store list of people

var peopleList = []; //currently empty