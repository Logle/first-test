function translate(string){

	function moveFirstletter(str){
		var temp = str + str[0];
		return temp.substring(1,temp.length)
	}

	function isVowel(str){
		if ((str[0]==="a")||(str[0]==="e")||(str[0]==="i")||(str[0]==="o")) {return true}
			else{
				if (str[0]==='u' && str[str.length-1]!='q') {return true}
					else { return false };
			}
	}
	// main body begins
	var array = string.split(" ");
	for (i=0; i<array.length; i++){
		while (!isVowel(array[i])){ 
			array[i] = moveFirstletter(array[i]);
		}
		array[i] += "ay";
	}
	return array.join(" ");
}



