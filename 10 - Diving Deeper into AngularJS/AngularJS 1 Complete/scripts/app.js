var app = angular.module("angularApp", []);

function onLoad() {
	getAPIBadge();
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
