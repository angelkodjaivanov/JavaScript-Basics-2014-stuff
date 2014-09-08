	function createArray(){
		var newArray = new Array(20);
		for(var i = 0; i < newArray.length; i++){
			newArray[i] = i * 5;
		}
		newArray.join(",");
		console.log(newArray);
	}
	console.log(createArray());