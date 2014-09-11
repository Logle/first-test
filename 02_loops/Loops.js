var repeat= function(str,count){
	var finalstr=""
	for (i=0; i<count; i++){
		finalstr=finalstr+str
	}
	return finalstr
}


var join= function(arr, ins){
	var finalstr=""
	for (i=0; i<arr.length; i++){
		finalstr = finalstr+ arr[i].toString()
		if  ((ins==="/")&&( i+1 != arr.length) ) {finalstr += ins} 
	}
	return finalstr	
}

var sum=function(arr){
	var total=0
	for (i=0; i<arr.length; i++){
		total += arr[i]
	}
	return total
}

var paramify= function(hash){
	
	// try print function seperately. doesn't work
	/*
	var print = function(arr, ob){
		var str=""
		for (i=0; i<arr.length; i++) {
			str= str + arr[i]+ "=" + ob[arr[i]] +"&"
		}
		//str= str.substring(0, str.length-1)
		return str;
	}*/
	// try sortProperty function. doesn't work
	/* var sortProperty =function(ob){
		var arr=[]
		for (x in ob){
			arr.push (ob.x)
		}
		arr.sort()
		return arr;
	} */
	

	if (Object.keys(hash).length===0 ) {return ""} 
	 	else {
	 		var arr=[]
			for (x in hash){ if (hash.hasOwnProperty(x)) {arr.push (x)} }
			arr.sort()
			var str=""
			
			for (i=0; i<arr.length; i++) {
			str= str + arr[i]+ "=" + hash[arr[i]] +"&"
			}	
			str= str.substring(0, str.length-1)
			return str ;	
	 	} 
}

var factorial= function(number){
	var count = 1 ;
	 if (number > 0){
		for (i=1; i<=number; i++){ count= count*i }		
	} ;
	return count ; 
}

var concat_string= function(arg){
	var args =[]
	for (i=0; i<arguments.length; i++) {args[i]=arguments[i]}  	
	var final = args.join ("")
	return final 
	
}











