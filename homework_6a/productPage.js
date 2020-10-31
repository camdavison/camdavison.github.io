
var prodArr = []

//This is going to be a product class for flowers you can purchase
class Product {
	
	
	constructor(quantity, color, fill, size) {
    this.quantity = quantity
    this.color = color
		this.fill = fill
		this.size = size
	}
}


// The following 2 functions control the +/- increments for th equantity counter

function incrementUp() {
  console.log('test')
  var quantValue = parseInt(document.getElementById('counterInput').value, 10);
  quantValue++;
  document.getElementById('counterInput').value = quantValue;
  
}

function incrementDown() {
  console.log('minus')
  var quantValue = parseInt(document.getElementById('counterInput').value, 10);
  if (quantValue > 1) {
    quantValue--;
    document.getElementById('counterInput').value = quantValue;
  }
}

var counterUp =document.getElementById('plus');
console.log(counterUp);
counterUp.addEventListener('click', incrementUp);

var counterDown =document.getElementById('minus');
console.log(counterDown);
counterDown.addEventListener('click', incrementDown);


// addToCart function pulls all selections, creates an object out of those selections and adds that object to array 
//prodArray[]

function addToCart() {

  //color selction 
  var colors = document.getElementsByName("colorSelect"); 
  var colorSelected = 'blank'

  for(var i = 0; i < colors.length; i++) {
    if(colors[i].checked) {
      //console.log(colors[i])
      colorSelected = colors[i].value;
      console.log(colorSelected);
    }
  }
  var fill = document.getElementById('fillValue').value;
  console.log(fill);

  var size = document.getElementById('sizeValue').value;
  console.log(size);
// grabbing the quantity value
  var quantInput= document.getElementById('counterInput').value;
  console.log('quantity input value');
  console.log(quantInput);
//turning the quantity sting into a float
  var quantity= parseFloat(quantInput);
  console.log('quantity float');
  console.log(quantity);

  for(var i = 1; i < quantity; i++) {
    var pillow = new Product(quantity, colorSelected, fill, size);
    console.log(pillow);

    prodArr.push(pillow); 

    console.log('heres the prodArr');
    console.log(prodArr);
  } 



  var pillow = new Product(quantity, colorSelected, fill, size);
  console.log(pillow);

  prodArr.push(pillow); 

  console.log('heres the prodArr');
  console.log(prodArr);

  updateCartNumber(prodArr.length);
  showCartBtn();


}


function updateCartNumber(num) {
	var cartCount = document.getElementById('cartUpdate');
  cartCount.value = num;
  console.log('This is num');
  console.log(num);
}


function showCartBtn(){
  document.getElementById('view-cart-btn').style.display = "block";
}









