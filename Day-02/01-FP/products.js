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
			for(var i=0;i < products.length-1; i++)
				for(var j=i+1; j < products.length; j++)
					if (products[i].id > products[j].id){
						var temp = products[i];
						products[i] = products[j];
						products[j] = temp;
					}
		}
		sort();
		console.table(products);
	});
	describe("Any list by any attribute", function(){
		function sort(list, attrName){
			for(var i=0;i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++)
					if (list[i][attrName] > list[j][attrName]){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}
		describe("Products by name", function(){
			sort(products, "name");
			console.table(products);
		});
		describe("products by cost", function(){
			sort(products, "cost");
			console.table(products);
		})
	})

	describe("Any list by any comparison", function(){
		function sort(list, comparerFn){
			for(var i=0;i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++)
					if (comparerFn(list[i], list[j]) > 0){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}
		describe("products by units", function(){
			var productComparerByUnits = function(p1, p2){
				if (p1.units < p2.units) return -1;
				if (p1.units > p2.units) return 1;
				return 0;
			};
			sort(products, productComparerByUnits);
			console.table(products);
		});

		describe("products by value [cost * units]", function(){
			var productComparerByValue = function(p1, p2){
				var p1Value = p1.units * p1.cost,
					p2Value = p2.units * p2.cost;
				if (p1Value < p2Value) return -1;
				if (p1Value > p2Value) return 1;
				return 0;
			};

			sort(products, productComparerByValue);
			console.table(products);
		})
	})

	
});

