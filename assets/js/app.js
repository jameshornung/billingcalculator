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
})