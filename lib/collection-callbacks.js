module.exports = {

	init: function( count, Callback ){
		
		lastCallback = Callback;
		callbackCount = count;
		return addCallback;
	}
};

var lastCallback;
var callbackCount;
var currentNumber = 0;
var callbackValues = [];


var addCallback = function( values ){
	
	if( callbackCount === currentNumber ){
		
		callbackValues.push( values );
		lastCallback( callbackValues );		
	}else{
	
		callbackValues.push( values );
		currentNumber++;
	}
};


