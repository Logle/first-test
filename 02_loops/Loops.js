var repeat = function(str,count){
	var finalstr="";
	for (var i=0; i<count; i++){
		finalstr += str;
	}
	return finalstr;
}


var join = function(arr, ins){
	var finalstr="";
	if (ins===undefined) {
		ins = "";
	}
	finalstr = arr.join(ins);
	return finalstr;	
}

var sum = function(arr){
	var total=0;
	var i;
	for (i=0; i<arr.length; i++){
		total += arr[i]
	}
	return total;
}

// while (i--) {sum+=arr[i]}

var paramify = function(hash){
	
	if (Object.keys(hash).length===0 ) {return ""} 
	 	else {
	 		var arr=[];
	 		var str="";
	 		var i;
			for (x in hash){ 
				if (hash.hasOwnProperty(x)) {arr.push(x)} 
			}
			arr.sort(); 
			
			// adding the array together
			for (i=0; i<arr.length; i++){
				str = str + arr[i]+ "=" + hash[arr[i]] +"&"
			}	
			return str.substring(0, str.length-1);	
	 	} 
}

var factorial = function(number){
	if (number === 0) return 1
		else return number*factorial(number-1);
}

var concat_string = function(string){
	var i;
	var a=[];
	for (i=0; i<arguments.length; i++){
		a[i]= arguments[i];
	}  // arguments is not a proper array
	return a.join("");
}

// function concat_string(){
// 	return join(arguments,"");
// };










