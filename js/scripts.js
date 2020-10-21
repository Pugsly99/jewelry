// Buisness Logic:
function add(number1, number2) {
	return number1 + number2;
}

function sub(number1, number2) {
	return number1 - number2;
}

function multi(number1, number2) {
	return number1 * number2;
}

function divi(number1, number2) {
	return number1 / number2;
}
// User Interface Logic:
//unction execute() {
	//event.preventDefault();
	$(document).ready(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#add1").val());
		const number2 = parseInt($("#add2").val());
		const result = add(number1, number2);
		$("#outputadd").text(result);
	});

	$("form#sub").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#sub1").val());
		const number2 = parseInt($("#sub2").val());
		const result = sub(number1, number2);
		$("#outputsub").text(result);
	});

	$("form#multi").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#multi1").val());
		const number2 = parseInt($("#multi2").val());
		const result = multi(number1, number2);
		$("#outputmulti").text(result);
	});

	$("form#divi").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#divi1").val());
		const number2 = parseInt($("#divi2").val());
		const result = divi(number1, number2);
		$("#outputdivi").text(result);
		
	});
});
