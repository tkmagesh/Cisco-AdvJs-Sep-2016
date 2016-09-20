console.log("welcome to es6");

for(let i=0;i < 10; i++){}



const x = 10;

//x = 100;

console.log(x);

var display = () => {
	console.log("Hello there!!")
}

display();

/*var add = (a,b) => {
	return a + b;
}*/

let add = (a=100,b=200) => a + b;

console.log('add(100,200) = ', add(100,200));
console.log('add() = ', add() );

function sum(x,y,...args) {
	console.dir(args);
	console.dir(arguments);
}

sum(10,20,30,40);

/*class Employee{
	constructor(id, name){
		this.id = id;
		this.name = name;
	}

	display(){
		console.log(this.id, this.name);
	}
}

let emp = new Employee(100, 'Magesh');
emp.display();
console.dir(emp);

class FullTimeEmployee extends Employee{
	constructor(id, name, salary){
		super(id, name);
		this.salary = salary;
	}
	display(){
		console.log(this.id, this.name, this.salary);
	}
}

let ftEmp = new FullTimeEmployee(200, 'Suresh', 20000);
ftEmp.display();

console.dir(ftEmp);*/

class PubSub {
	constructor(){
		this.__subscribers = {};
	}

	addSubscriber(eventName, subscriptionFn){
			this.__subscribers[eventName] = this.__subscribers[eventName] || [];
			this.__subscribers[eventName].push(subscriptionFn);
		}

	removeSubscriber(eventName, subscriptionFn){
		var subscriptionFns = this.__subscribers[eventName] || [];
		for(var i=subscriptionFn.length-1; i >=0; i--)
			if (subscriptionFns[i] === subscriptionFn)
				subscriptionFns.splice(i,1);
	}

	emit(eventName, ...eventData){
		(this.__subscribers[eventName] || [])
			.forEach((subscriptionFn) => subscriptionFn.apply(this, eventData));
		
	}
}

var pubsub = new PubSub();

pubsub.addSubscriber("time", (currentTime) => console.log("current time is => ", currentTime));

setTimeout(function(){
	pubsub.emit("time", new Date())
},5000);

let Employee = (function(){
     let idSymbol = Symbol(),
         nameSymbol = Symbol();

     return class Employee{
         constructor(id, name){
            this[idSymbol] = id;
            this[nameSymbol] = name;
         }
         display(){
            console.log(this[idSymbol], this[nameSymbol]);
         }
         get id(){
            return this[idSymbol]
         }
         get name(){
            return this[nameSymbol]
         }
         set name(value){
             //do the validation
             this[nameSymbol] = value;
         }
     }

})();
