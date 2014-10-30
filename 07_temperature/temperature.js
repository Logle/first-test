function f2c(value){
	return (value-32)*5/9;
}

function c2f(value){
	return value*9/5 +32;
}

var Temperature = function (value){
	var currentF= value;
	var currentC= f2c(value) ;

	this.fahrenheit = function(){return currentF};
	this.celcius = function(){return currentC};
	
	this.setFahrenheit = function(value){
		currentF = value;
		currentC= f2c(value);	
	}
	this.setCelcius = function(value){
		currentF = c2f(value);
		currentC = value;
	}
}

// should use Prototype of setFahrenheit and setCelcius