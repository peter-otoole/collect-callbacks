##collect-callbacks.js

This function is designed to collect callbacks and call a final callback with all the returned values.

A typical use case is if you have to loop over asynchronous functions and don't want to call multiple callbacks but want the results.

```
var enterItems = function( values, callback ){

	var collect = require('collect-callbacks.js');
		
	var addOne = collect.init( values.length, callback );
		
	for( var value in values){
		db.insert( value, function( err, res ){
			addOne( err, res );
		});
	}
}
```

##Rules

The library takes a group of callbacks and condenses them down to one single callback. The final callback, the one you pass in, is only called when it collects the number of callbacks you set. So say you set it to be 25, it will only execute the "master" callback if you addOne 25 times. In the example above, say db.insert has a bug in it and for some reason one out of the 25 anonymous functions fails and doesn't call addOne, the master callback will never be called. 

##License

Copyright 2014 Peter O'Toole

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
