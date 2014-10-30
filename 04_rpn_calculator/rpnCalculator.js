
var Calculator = function(){
	var current = 0;
	var arr= [];
	this.value = function(){
		return current;
	};
	this.push = function(x){
		arr.push(x)
	};
	this.plus = function(){
		if (arr.length <=1) {throw "calculator is empty"}
			else {
				arr[arr.length-2] += arr[arr.length-1];
				arr.pop();
				current = arr[arr.length-1];
			}
	};
	this.minus = function(){
		if (arr.length <=1) {throw "calculator is empty"}
			else {
				arr[arr.length-2] -= arr[arr.length-1];
				arr.pop();
				current = arr[arr.length-1];
			}
	};
	this.divide = function(){
		if (arr.length <=1) {throw "calculator is empty"}
			else {
				arr[arr.length-2] /= arr[arr.length-1];
				arr.pop();
				current = arr[arr.length-1];
			}
	};
	this.times = function(){
		if (arr.length <=1) {throw "calculator is empty"}
			else {
				arr[arr.length-2] *= arr[arr.length-1];
				arr.pop();
				current = arr[arr.length-1];
			}
	};
}

// alternative writing using prototype
// Calculator.prototype.push = function(){} ---> don't use Caculator.prototype since it replaces all prototype
// Calculator.prototype.plus = function(){}
// Functional programming: Caculator.prototype.popandComputer = function(operatorFunction){}


