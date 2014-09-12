
function Calculator(){
	var current = 0;
	var arr= [];
	this.value = function(){
		return current
	}
	
	this.push = function(x){
		arr.push(x)
	}
	this.plus = function(){
		if (arr.length <=1) {throw "calculator is empty"}
			else {
				arr[arr.length-2] += arr[arr.length-1]
				arr.pop()
				current = arr[arr.length-1]
				return current
			}
		
	}
	this.minus = function(){
		if (arr.length <=1) {throw "calculator is empty"}
			else {
				arr[arr.length-2] -= arr[arr.length-1]
				arr.pop()
				current = arr[arr.length-1]
				return current
			}
		
	}
	this.divide = function(){
		if (arr.length <=1) {throw "calculator is empty"}
			else {
				arr[arr.length-2] /= arr[arr.length-1]
				arr.pop()
				current = arr[arr.length-1]
				return current
			}
		
	}
	this.times = function(){
		if (arr.length <=1) {throw "calculator is empty"}
			else {
				arr[arr.length-2] *= arr[arr.length-1]
				arr.pop()
				current = arr[arr.length-1]
				return current
			}
		
	}
}
