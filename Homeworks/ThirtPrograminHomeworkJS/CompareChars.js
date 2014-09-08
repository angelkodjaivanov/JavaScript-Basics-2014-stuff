	function CompareChars(firstArray, secondArray){
		if(firstArray.length == secondArray.length){
			for(var i = 0; i < firstArray.length;i++){
				if(firstArray[i] === secondArray[i]){
					return "equal";
				}
				else{
					return "not equal"
				}
			}
		}
		else{
			return "not equal";
		}
	}
	console.log(CompareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']));
	console.log(CompareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']));
	console.log(CompareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']));