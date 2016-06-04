var currentEmployeesTable = new Firebase("https://employeedatamanager.firebaseio.com/");

// function displayTime() {
//    var time = moment().format('hh:mm:ss a');
//    $('#currentTime').html("Current Time Is:  " + time);
//    //$('#currentTime').append(time);
//    setTimeout(displayTime, 1000);
// };

// currentEmployeesTable.on("value", function(snapshot) {

// })

$(".submitButton").on("click", function() {
	var nameOfEmployee = $('#calcEmployeeName').val().trim();
	var roleOfEmployee = $('#calcRole').val().trim();
	var employeeStartDate = $('#calcStartDate').val().trim();
	var employeePayRate = $('#calcRate').val().trim();

	console.log(nameOfEmployee);
	console.log(roleOfEmployee);
	console.log(employeeStartDate);
	console.log(employeePayRate);
})

currentEmployeesTable.on("value", function(snapshot) {
	

	
})