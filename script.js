function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let index = -1;

	if(s1.indexOf(s2)>0){
	return s1.indexOf(s2)
	}
	else{
		return index;
	}



	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
