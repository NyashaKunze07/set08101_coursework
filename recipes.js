// JavaScript source code
//code to search thorugh html files for recipes
function search_recipe(){
	let input = document.getElementById('searchbar').valueinput=input.toLowerCase();
	let x = document.getElementByClassName('column');

	for (i = 0; i < x.lenght; i++){
		if(!x[i]).innerHTML.toLowerCase().includes(input)){
			x[i].style.display="none";
		}
		else{
			x[i].style.display="row-item";
		}
	}
}
