var pubsub = (function(){
	
	var subscribers = {};

	function addSubscriber(eventName, subscriptionFn){
		subscribers[eventName] = subscribers[eventName] || [];
		subscribers[eventName].push(subscriptionFn);
	}

	function removeSubscriber(eventName, subscriptionFn){
		var subscriptionFns = subscribers[eventName] || [];
		for(var i=subscriptionFn.length-1; i >=0; i--)
			if (subscriptionFns[i] === subscriptionFn)
				subscriptionFns.splice(i,1);
	}

	function emit(eventName){
		var data = Array.prototype.slice.call(arguments, 1);
		var subscriptionFns = subscribers[eventName];
		subscriptionFns.forEach(function(subscriptionFn){
			subscriptionFn.apply(this, data);
		});
	}

	return {
		addSubscriber : addSubscriber,
		removeSubscriber : removeSubscriber,
		emit : emit
	}

})();



function PubSub(){
	this.__subscribers = {};
}

Pubsub.prototype.addSubscriber = function addSubscriber(eventName, subscriptionFn){
		this.__subscribers[eventName] = this.__subscribers[eventName] || [];
		this.__subscribers[eventName].push(subscriptionFn);
	}

Pubsub.prototype.addSubscriber = function removeSubscriber(eventName, subscriptionFn){
	var subscriptionFns = this.__subscribers[eventName] || [];
	for(var i=subscriptionFn.length-1; i >=0; i--)
		if (subscriptionFns[i] === subscriptionFn)
			subscriptionFns.splice(i,1);
}

Pubsub.prototype.addSubscriber = function emit(eventName){
	var data = Array.prototype.slice.call(arguments, 1);
	var subscriptionFns = this.__subscribers[eventName];
	subscriptionFns.forEach(function(subscriptionFn){
		subscriptionFn.apply(this, data);
	});
}

var pubsub = new Pubsub();
