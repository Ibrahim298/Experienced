function onLoad() {
	// This is an example of an alert function
	//alert("Function onLoad() called");
	document.getElementById("timestamp").innerHTML = Date();
    getAPIBadge();
}
function checkNumber() {
	
	var theNumber, theMessage;
	
    // Get the value of the input field with id="numb"
    theNumber = $('#smallnumber').val();

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(theNumber) || theNumber < 1 || theNumber > 10) {
        theMessage = "Number was expected to be between 1 and 10";
    } else {
        theMessage = "Number is Good";
    }
    $('#numberMessage').text(theMessage);
    	
}
function getAPIBadge() {
    var ctcAPI = "http://ChooseToCodeAPI.azurewebsites.net/api/values/";
    $.post( ctcAPI, { 
        SchoolName:"Joe's Choose to Code", 
        ZipCode: "33062", 
        Level:"Beginner"
    }).done(function( data ) {
        $("#badge").html(data);
    });
}
