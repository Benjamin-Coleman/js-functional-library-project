fi = (function() {
  return {
    libraryMethod: function() {return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'},
    each: function(list, iteratee){
    	for (let i = 0; i < list.length; i++){
    		iteratee(list[i])
    	}
    	return list
    },
    map: function(list, iteratee){
  		var newArray = [];
    	for (let i = 0; i < list.length; i++){
    		newArray.push(iteratee(list[i]))
    	}
    	return newArray
    },
    reduce: function(list, iteratee, memo){
    	if (memo !== undefined){
    		var result = memo
    	} else {
    		var result = list[0]
    	}
    	for (let i = 0; i < list.length; i++){
    		result = iteratee(result, list[i])
    	}
    	return result
    },
    find: function(list, predicate){

    	for (let i = 0;  i < list.length; i++) {
    		if (predicate(list[i])) {
    			return list[i]
    		}
    	}
    },
    filter: function(list, predicate){
    	let newArray = []
    	for (let i = 0;  i < list.length; i++) {
    		if (predicate(list[i])) {
    			newArray.push(list[i])
    		}
    	}
    	return newArray
    },
    sortBy: function(list, iteratee){
    	if (typeof iteratee !== "string"){
	    	let computedValuesAndOriginal = []
	    	for (let i = 0;  i < list.length; i++) {
	    		let computed = iteratee(list[i])
	    		let original = list[i]	
	    		computedValuesAndOriginal.push( {computed:computed, original:original} )
	    	} 
	    	let sortedArray = computedValuesAndOriginal.sort(function(a, b){return a["computed"] - b["computed"]})
	    	let returnArray = []

	    	for (let i = 0;  i < sortedArray.length; i++) {
	    		returnArray.push(sortedArray[i].original)
	    	} 

	    	return returnArray
    	}else {
    		let valueAndOriginal = []
    		for (let i = 0; i < list.length; i++){
    			let value = list[i][iteratee]
    			let original = list[i]
    			valueAndOriginal.push({value: value, original: original})
    		}
    		let sortedArray = valueAndOriginal.sort(function(a, b){
    			if (a.value > b.value) return 1;
    			if (a.value < b.value) return -1;
    			return 0
    		});
	    	let returnArray = []

	    	for (let i = 0;  i < sortedArray.length; i++) {
	    		returnArray.push(sortedArray[i].original)
	    	}

	    	return returnArray 
    	}
    },
    size: function(list){
    	let countingArray = []
    	for (key in list){
    		countingArray.push(key)
    	}
    	return countingArray.length
    },
    /* start array functions */
    first: function(array, n){
    	if (n !== undefined){
    		return array.slice(0,n)
    	}
    	else {
    		return array[0]
    	}
    },
    last: function(array, n){
    		var length = array.length
    	if (n !== undefined){
    		return array.slice(-n)
    	}
    	else {
    		return array[length - 1]
    	}
    },
    compact: function(array){
    	let newArray = []
    	for (let i = 0; i < array.length; i++){
    		if (array[i]){
    			newArray.push(array[i])
    		}
    	}

    	return newArray
    },
    uniq: function(array, isSorted, iteratee){
    	let uniqArray = []

    	if (iteratee){
			var testArray = [];
			for (let i = 0; i < array.length; i++){
				testArray.push(iteratee(array[i]))
			}
    	} else {
    		var testArray = array
    	}


 
	    	for (let i = 0; i < testArray.length; i++){
	    		if (!uniqArray.includes(testArray[i])){
	    			uniqArray.push(testArray[i])
	    		}
	    	}

    	return uniqArray
    },
    keys: function(object) {
    	let keysArray = []
    	for (key in object){
    		keysArray.push(key)
    	}
    	return keysArray
    },
    values: function(object){
    	let valuesArray = []
    	for (key in object){
    		valuesArray.push(object[key])
    	}
    	return valuesArray
    },
    functions: function(object){
    	return object.keys.sort()
    },
    flatten: function flattenIt(array, shallow){
		return array.reduce(
			(a, b) => a.concat(Array.isArray(b) ? flattenIt(b) : b), []
		);
    },
    bind: function(fn, object, ...args){
    	object.fn = fn;
    	return function(){return object.fn(...args)};
    }


  }







})()
