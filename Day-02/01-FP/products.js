var products = [
	{id : 4, name : "Pen", cost : 10, units : 50, category : 1},
	{id : 8, name : "Hen", cost : 60, units : 40, category : 1},
	{id : 2, name : "Ten", cost : 30, units : 70, category : 2},
	{id : 3, name : "Zen", cost : 90, units : 60, category : 2},
	{id : 9, name : "Den", cost : 40, units : 30, category : 1},
];

/*
sort
filter
any
all
sum
min
max
aggregate
groupBy
*/

function describe(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}

describe("Default list", function(){
	console.table(products);
});


describe("Sorting", function(){
	describe("Default Sorting [ products by id ]", function(){
		function sort(){

		}
		sort();
		console.table(products);
	});

	
});

