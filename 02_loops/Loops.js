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

// while (i--) {sum+=arr[i]}

var paramify= function(hash){
	
	if (Object.keys(hash).length===0 ) {return ""} 
	 	else {
	 		var arr=[]
			for (x in hash){ if (hash.hasOwnProperty(x)) {arr.push (x)} }
			arr.sort()  //short the array
			var str=""
			// adding the array together
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
// function concat_string(){return join(arguements,"")}










