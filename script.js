// var first_name = prompt("What is your first name?");
// var last_name = prompt("What is your last name?");

var list = ["buy me food"];
var input = prompt("what to do? ");

while (input != "quit"){
	if (input == "new") {
		AddToDos();
	} 
	if (input == "list") {
		ListTodos();
	}
	if (input == "delete"){
		DeleteToDos();
	}
	else{
		input = prompt("what to do? ");
	}
	
}
console.log("Quit the app")


function ListTodos(){
		console.log("**********");
		list.forEach(function(list,i){
			console.log(i + ": " + list);
		});
		console.log("**********");
		input = prompt("what to do? ");
}
//var x = prompt("are we there yet? ");
function AddToDos(){
	var list_element = prompt("what to add? ");
		console.log(list_element + " added to the list")
		list.push(list_element);
}

function DeleteToDos(){
	var index_delete = prompt ("which index to delete");
		console.log(list[index_delete] + " deleted");
		list.splice(index_delete,1);
		input = prompt("what to do? ");
}

// while( !word.includes("yes")){
// 	var word = prompt("are we there yet? ");
// }
// alert("YAY");


// function kts(str) {
// 	//  replace all - with _ 
// 	str = str.split("-").join("_");
// 	return str;
	
// }

function printReverse(x){
		y = [];
		x.forEach(function(x){
			y.unshift(x);
		});
		y.forEach(function(y){
			console.log(y);
		});
}

function isUniform(x){
	k = x[0];
	i = 0;
	x.forEach(function(x){
		if (k!=x){
			i = i-1;
		}
		else{
		}
		});
	if (i<0){
		return false;
	}
	else{
		return true;
	}
}

function Sum(x){
	i = 0;
	x.forEach(function(x){
		i = i+x;
});
	return i;
}

function Max(x){
	CurrentMax = x[0];
	x.forEach(function(x){
		if (x>CurrentMax){
			CurrentMax = x;
		}
});
	return CurrentMax;
}

// var days = age*365 + Math.round(add_days);
// // var full_name = first_name + " "+ last_name
// alert("you have lived "+ days + " days.");
