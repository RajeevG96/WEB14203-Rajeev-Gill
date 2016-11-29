//use jquery to select the HTML elements we're going to manipulate

var homeGoButton = $('#home button')
var homeSection = $('#home')
var resultsSection = $('#results')
var resultsBackButton = $('#results .back')
var resultsOL = $('#results ol')
var ListItem1 = $('#ListItem1')
var homeDropdown = $('#home select')
var detailsBackButton = $('#details .back')
var DetailsSection = $('#details')
var detailsInfo = $('#details #info')
var detailsSection = $('#details ')

//tell the button to do something when we click 
homeGoButton.click(function () {

    //capture the users chosen option with jQ
    var chosenOption = homeDropdown.val()
    console.log("You picked " + chosenOption)

    // filter+sort people by user selection
    var resultsList = filterAndSortList(peopleList, chosenOption);
    console.log(resultsList);

    showList (resultsList, resultsOL)

    //what happens when someone clicks on a result?
    $('#results li').click( function() {
        // grab the id from the clicked item
        var resultId = $(this).attr('id')
        // use the id to get the right data
        var resultData = resultsList[resultId]
        console.log(resultData)
        // call the function showDetails()
        showDetails(resultData, detailsInfo)
        // show the details!
        resultsSection.hide()
        detailsSection.show()
    })

    //show results
    homeSection.hide()
    resultsSection.show()

})
    

resultsBackButton.click(function () {
    homeSection.show()
    resultsSection.hide()
})

ListItem1.click(function () {
    resultsSection.hide()
    DetailsSection.show()
})

detailsBackButton.click(function () {
    resultsSection.show()
    DetailsSection.hide()
})

