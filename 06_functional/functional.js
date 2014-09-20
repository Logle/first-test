function countWords(string){
	var count=1
	for (i=0; i<string.length; i++){
		if (string[i]===" "){
			count++
		}
	}
	return count
} 

// return string.split(" ").length

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}
// closure

function forEach(array,action){
	for (var i=0;i<array.length; i++) {action(array[i])}
}

//  for (var i=0, n=arr.length; i<n; i++){}

function map(array,action){
	var result=[]
	for (var i=0;i<array.length; i++) {result[i] = action(array[i])}
	return result ;	
}

function filter(array,action){
	var result=[]
	for (var i=0;i<array.length; i++) { 
		if ( action(array[i]) ) {result.push(array[i])}
	}
	return result ;	
}

function contains(obj,member){
	for (var i in obj) { 
		if (obj.hasOwnProperty(i) && obj[i] === member ) 
			{return true}
	}
	return false ;	
}

function countWordsInReduce(a,b){
	return countWords(a) +b ;
}

function reduce(array,start,action){
	var current = start;
  	for (var i = 0; i < array.length; i++) current = action(array[i], current);
  	return current;
}


function sum(array){
	return reduce(array,0, function(a,b){ return a+b })
}

function every(array,action){
	if (array.length===0) return true
		else{
			for (i=0; i<array.length; i++){
				if (action(array[i]) !=true) return false
			}
		return true
		} 
}
function any(array,action){
	if (array.length===0) return false
		else{
			if (action===undefined) {
				for (i=0; i<array.length; i++){
					if (array[i] ===true) return true
					}
			} else{
				for (i=0; i<array.length; i++){
					if (action(array[i]) ===true) return true
					}	
			}			
		return false	
		} 
}

function once(action) {
    var executed = false;
    return function () { 
    	if(!executed) { executed = true; action() }
    };
};

function wrapper(f1,f2){
	var x = function(){return f1();};
  	final = function(){return f2(x);};
  	return final;
}	



