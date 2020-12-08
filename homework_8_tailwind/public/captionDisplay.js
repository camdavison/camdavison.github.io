
// pulling caption array

function capLoad() {
	
	var loadGameArr = localStorage.getItem('captions');
    prodArrParse = JSON.parse(loadGameArr);
    console.log(prodArrParse);
}