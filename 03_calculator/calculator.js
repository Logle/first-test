


// learn to use prototype
var Calculator = function(){
 	this.currentValue=0;
 };
 
 Calculator.prototype.value = function(){
 	return this.currentValue;
 }
 Calculator.prototype.add = function(x){
 	this.currentValue += x ;
 }
 Calculator.prototype.subtract = function(x){
 	this.currentValue -= x;
 }

