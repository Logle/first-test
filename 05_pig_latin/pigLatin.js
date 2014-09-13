function translate(string){

	function moveFirstletter(str){
		var temp =str + str[0];
		return temp.substring(1,temp.length)
	}

	function isVowel(str){
		if ((str[0]==="a")||(str[0]==="e")||(str[0]==="i")||(str[0]==="o")) {return true}
			else{
				if ( str[0]==='u' && str[str.length-1]!='q') {return true}
				return false
			}
	}

	function stringToArray(str){
		var sPos=0;
		var arr=[];
		for(i=1; i<str.length; i++) {
			if ( (str[i]===" ")&&(str[i-1]!=" ") ) {
				arr.push(str.substring(sPos,i))
				sPos=i+1;
			}
		}	
		arr.push(str.substring(sPos,str.length))
		return arr;
	}	

	function addy(str){
		return str+"ay"
	}
	
	// main body begins

	var array= stringToArray(string);

	for (i=0; i<array.length; i++){
		while ( isVowel(array[i])===false  ) { array[i] = moveFirstletter(array[i]) }
		array[i] = addy(array[i])
	}
	
	var final = array.join(" ")
	return final
}



