"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log("welcome to es6");

for (var i = 0; i < 10; i++) {}

var x = 10;

//x = 100;

console.log(x);

var display = function display() {
	console.log("Hello there!!");
};

display();

/*var add = (a,b) => {
	return a + b;
}*/

var add = function add() {
	var a = arguments.length <= 0 || arguments[0] === undefined ? 100 : arguments[0];
	var b = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];
	return a + b;
};

console.log('add(100,200) = ', add(100, 200));
console.log('add() = ', add());

function sum(x, y) {
	for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		args[_key - 2] = arguments[_key];
	}

	console.dir(args);
	console.dir(arguments);
}

sum(10, 20, 30, 40);

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

var PubSub = function () {
	function PubSub() {
		_classCallCheck(this, PubSub);

		this.__subscribers = {};
	}

	_createClass(PubSub, [{
		key: "addSubscriber",
		value: function addSubscriber(eventName, subscriptionFn) {
			this.__subscribers[eventName] = this.__subscribers[eventName] || [];
			this.__subscribers[eventName].push(subscriptionFn);
		}
	}, {
		key: "removeSubscriber",
		value: function removeSubscriber(eventName, subscriptionFn) {
			var subscriptionFns = this.__subscribers[eventName] || [];
			for (var i = subscriptionFn.length - 1; i >= 0; i--) {
				if (subscriptionFns[i] === subscriptionFn) subscriptionFns.splice(i, 1);
			}
		}
	}, {
		key: "emit",
		value: function emit(eventName) {
			var _this = this;

			for (var _len2 = arguments.length, eventData = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
				eventData[_key2 - 1] = arguments[_key2];
			}

			(this.__subscribers[eventName] || []).forEach(function (subscriptionFn) {
				return subscriptionFn.apply(_this, eventData);
			});
		}
	}]);

	return PubSub;
}();

var pubsub = new PubSub();

pubsub.addSubscriber("time", function (currentTime) {
	return console.log("current time is => ", currentTime);
});

setTimeout(function () {
	pubsub.emit("time", new Date());
}, 5000);

var Employee = function () {
	var idSymbol = Symbol(),
	    nameSymbol = Symbol();

	return function () {
		function Employee(id, name) {
			_classCallCheck(this, Employee);

			this[idSymbol] = id;
			this[nameSymbol] = name;
		}

		_createClass(Employee, [{
			key: "display",
			value: function display() {
				console.log(this[idSymbol], this[nameSymbol]);
			}
		}, {
			key: "id",
			get: function get() {
				return this[idSymbol];
			}
		}, {
			key: "name",
			get: function get() {
				return this[nameSymbol];
			},
			set: function set(value) {
				//do the validation
				this[nameSymbol] = value;
			}
		}]);

		return Employee;
	}();
}();