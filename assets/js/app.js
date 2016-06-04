var currentEmployeesTable = new Firebase("https://employeedatamanager.firebaseio.com/");

$(".submitButton").on("click", function() {
	var nameOfEmployee = $('#calcEmployeeName').val().trim();
	var roleOfEmployee = $('#calcRole').val().trim();
	var employeeStartDate = $('#calcStartDate').val().trim();
	var employeePayRate = $('#calcRate').val().trim();

	currentEmployeesTable.push({
		name:nameOfEmployee,
		role:roleOfEmployee,
		start:employeeStartDate,
		rate:employeePayRate
	});

	$("form")[0].reset();
	return false;
});

currentEmployeesTable.on("child_added", function(childSnapShot) {

	console.log(childSnapShot.val().name);
	$('#nameOfEmployee').append(childSnapShot.val().name + "<br>");
	$('#roleOfEmployee').append(childSnapShot.val().role + "<br>");
	$('#workingStartDate').append(childSnapShot.val().start + "<br>");
	$('#workingMonthlyRate').append(childSnapShot.val().rate + "<br>");
	// $('#workingTotalBilled').append(childSnapShot.val().start);

}, function(errorObject) {

});