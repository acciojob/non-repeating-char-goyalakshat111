function firstNonRepeatedChar(str) {
 // Write your code here
	if(str.length==0){
		return null;
	}
	str = str.toLowerCase();
	let map = new Map();
	for(let t of str){
		if(map.has(t)){
			map.set(t,map.get(t)+1)
		}
		else{
			map.set(t,1)
		}
	}

	for(let [char,count] of map){
		if(count==1){
			return char
		}
	}
	return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
