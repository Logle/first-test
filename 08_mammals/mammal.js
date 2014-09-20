function Mammal(name){
	this.name = name ;
	this.offspring=[] ;	
}

Mammal.prototype.sayHello = function(){
	return "My name is " + this.name +","+ " I'm a Mammal"
}

Mammal.prototype.haveBaby = function(){
	var newBaby = new this.constructor("Baby " + this.name); //not new Mammal !!!
	this.offspring.push(newBaby);
	return newBaby;
}

function Cat(name,color){
	this.name = name; // Mammal.call(this, name) in exchange for 2 this name, offspring
	this.color= color;
	this.offspring=[];
}

Cat.prototype = new Mammal;
Cat.prototype.contructor = Cat; // important to link the constructor to Cat instead.

// Cat.prototype = Mammal.prototype (wrong!! change all Mammal.prototype)
// Cat.prototype = Object.create(Mammal.prototype)


Cat.prototype.haveBaby = function(color){
	var newBaby = new Cat("Baby " + this.name);
 // var new Baby = Mammal.prototype.haveBaby.call(this)
	newBaby.color = color;
	this.offspring.push(newBaby);
	return newBaby;
}


