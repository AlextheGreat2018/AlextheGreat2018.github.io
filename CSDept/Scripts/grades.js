var grades = [];
var total_hours = [];
var points = [];

var $ = function (id) {
	return document.getElementById(id);
};
var addGrade = function () {
	// get user entries
	var grade = $("grade").value;
    var hours  = parseInt( $("hours").value );
    
    // check entries for validity
    if (grade == "" || isNaN(hours) || hours < 0) {
    	alert("You must enter a letter grade and valid credit hours.");
    }
	else {
		grades[grades.length] = grade;
		total_hours[total_hours.length] = hours;
	    $("grade").value = "";
	    $("hours").value = "";
        $("grades_display").value = "";
	}
    $("grade").focus();
};
var displayGrades = function () {
    var displayText = "";
    
    // Create text to display onto the textarea
    for(var i = 0; i < grades.length; i++) {
        displayText += grades[i] + " " + total_hours[i] + "\n";
    }
    $("grades_display").value = displayText;
};
var processGrades = function () {
    for(var i = 0; i < grades.length; i++) {
      switch(grades[i]) {
        case "A":
            points[i] = 4.0;
            break;
        case "B":
            points[i] = 3.0;
            break;
        case "C":
            points[i] = 2.0;
            break;
        case "D":
            points[i] = 1.0;
            break;
        case "F":
            points[i] = 0.0;
            break;
        default:
            alert("Not a valid grade.");
        }
    }
    
    $("gpa").value = calculateGPA();
};
var calculateGPA = function () {
    var gradeSum = 0;
    var creditSum = 0;
    var gpaResults;
    
    for(var i = 0; i < points.length; i++) {
        gradeSum = gradeSum + (points[i] * total_hours[i]);
        creditSum = creditSum + total_hours[i];
    }
    
    gpaResults = gradeSum / creditSum;
    return gpaResults.toPrecision(3);
};
var clearGrades = function () {
    $("grade").value = '';
    $("hours").value = '';
    $("gpa").value = '';
}
window.onload = function () {
	$("grade").focus();
    $("display_grades").onclick = displayGrades;
};