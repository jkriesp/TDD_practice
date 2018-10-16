function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (a) {
	if (a == undefined || a.length == 0) return 0;

	if (a.length == 1) return a[a.length-1];

	let sum = 0;
	for (let i = 0; i < a.length; i++) {
		sum += a[i];
		
	}

	return sum;
	
}

function multiply (a) {
	let sum = 1;
	for (let i = 0; i < a.length; i++) {
		sum *= a[i];
		
	}

	return sum;
	
}

function power(a, power) {
	let sum = a;
	for (let i = 0; i <= power; i++) {
		sum += (a * a) - 1;
		
	}
	return sum;
}

function factorial(a) {
	if (a == 0 || a == 1) return 1;
	
	
	for (let i = a -1 ; i >= 1; i--) {
		a *= i;
	}
	return a;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}