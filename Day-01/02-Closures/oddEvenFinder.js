function getEvenOddFinder(){
	var cache = {};
	function checkOddOrEven(n){
		console.log('processing ', n);
		return n % 2 === 0 ? "even" : "odd";
	}
	return function(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkOddOrEven(n);
		return cache[n]
	}
}