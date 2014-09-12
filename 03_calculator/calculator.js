

function Calculator() {
	var current = 0
	this.value = function() {return current }
	this.add = function(x){
		current += x
		return current
	}
	this.subtract = function(x){
		current -= x
		return current
	};
}