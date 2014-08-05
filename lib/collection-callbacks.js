module.exports = {
	
	anyError: function(){
		reduceErrors = true;
		
		var result = {

			init: function( count, Callback ){
		
				lastCallback = Callback;
				callbackCount = count;
				return addCallback;
			}
		}
		
		return result;
	}
	
	init: function( count, Callback ){
		
		lastCallback = Callback;
		callbackCount = count;
		return addCallback;
	}
};

var lastCallback;
var callbackCount;
var reduceErrors;
var errors = [];
var responses = [];

var addCallback = function( err, res ){
	
	errors.push( err );
	responses.push( res );
	
	if( responses.length === callbackCount ){

		if( reduceErrors ){
		
			var error = reduceErrors( errors );
			
			lastCallback( error, responses );
		}else{
		
			lastCallback( errors, responses );	
		}
	}
};

var reduceErrors = function( errors ){
	
	var errorHappened = errors.reduce(function (acc, current) {
		return acc || current;
	});

	return errorHappened
};

