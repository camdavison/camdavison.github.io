/*
1. think about what my product is and the attributes we need (we also made this class)
2. What inputs in the HTML would correpsond to these attributes (i.e. frosting or no frosting, that might be a dropdown with true/false or a radio button with yes/no)
3. Create an add-to-cart button and tie an JavaScript event to it via a function
4. In the function we created about in #3, When add-to-cart is pressed, we need to grab the values from these corresponding HTML elements 
5. With these values as local variables, use them to create our product object in a class we are about to make
6. Now we need to make our product class, just like the Item class below this text!
7. add the created object to a list we have 
8. In the function we made in step 3, call another function we'll create to update our cart number
9. in this cart number update function, we take the length of our productArr and make the cart icon display that 
*/

/*

JSON takes an object or list of objects
Make them into a string, including all the attributes
You then pass this string to another page (Via several methods)
Then that reciving page decodes the string and makes it back into an object(s)

*/

var productArr = []
var productArr2 = []

//This is going to be a product class for flowers you can purchase
class Product {
	
	
	constructor(type, color, thorns) {
		this.type = type
		this.color = color
		this.thorns = thorns

	}
}

function checkoutPageLoaded() {
	//Now that the checkout page is loaded, lets grab that localStorage adta
	
	var loadedProductArr = localStorage.getItem('order')
	productArr2 = JSON.parse(loadedProductArr)
	//Now productArr2 is the equivalent of the productArr we stored on the index.html page 
	
	console.log('we are on checkout page')
	console.log(productArr2)
	
	var listOfProducts = document.getElementById('listOfProducts')
	
	for(var i = 0; i < productArr2.length; i++) {
	   var flower = productArr2[i]
	   var flowerType = flower.type
	   var flowerColor = flower.color
	   var flowerThorns = flower.thorns
	   if (flowerType == 'rose') {
		listOfProducts.innerHTML += '<div class="roses">Type: ' + flowerType + ' Color: ' + flowerColor + ' Thorns: ' + flowerThorns + '</div>'
		listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + ')">[click to delete]</span>'
		listOfProducts.innerHTML += '<br /><br /><br />'
	   }
	   else {
		listOfProducts.innerHTML += '<div onclick="wow()">Type: ' + flowerType + ' Color: ' + flowerColor + ' Thorns: ' + flowerThorns + '</div>'
		listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + ')">[click to delete]</span>'
		listOfProducts.innerHTML += '<br /><br /><br />'
	   }
	   
	   
	}
}

//Call this function before navigating away from checkout page (it will save your edits/deletes)
function saveEdits() {
	localStorage.setItem('order', JSON.stringify(productArr2))
}

function deleteProduct(i) {
	alert('i : ' + i)
	console.log('before we delete')
	console.log(productArr2)
	
	//Remove this product object from our productArr2 
	productArr2.splice(i,1)
	
	console.log('after we delete')
	console.log(productArr2)
	
	listOfProducts.innerHTML = ''
	
	for(var i = 0; i < productArr2.length; i++) {
	   var flower = productArr2[i]
	   if (flower) {
		   var flowerType = flower.type
		   var flowerColor = flower.color
		   var flowerThorns = flower.thorns
		   if (flowerType == 'rose') {
			listOfProducts.innerHTML += '<div class="roses">Type: ' + flowerType + ' Color: ' + flowerColor + ' Thorns: ' + flowerThorns + '</div>'
			listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + ')">[click to delete]</span>'
			listOfProducts.innerHTML += '<br /><br /><br />'
		   }
		   else {
			listOfProducts.innerHTML += '<div onclick="wow()">Type: ' + flowerType + ' Color: ' + flowerColor + ' Thorns: ' + flowerThorns + '</div>'
			listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + ')">[click to delete]</span>'
			listOfProducts.innerHTML += '<br /><br /><br />'
		   }
	   }
	   
	}
	//Remove it visually
	
}

function wow() {
	alert('Tulip was clicked')
}

function addToCart() {
	var type = document.getElementById('flowerType').value
	
	//alert('selected flower type: ' + type)
	
	
	//Below this gets our selected color of the flower from the radio buttons
	
	var colors = document.getElementsByName("color");
	//colors is now an array of the three inputs (acting as radio buttons) from our HTML page
	//The three items in this 'colors' array can be thought of as three HTML element objects
	
	var selectedColor = 'blank';

	for(var i = 0; i < colors.length; i++) {
	   if(colors[i].checked) {
		   selectedColor = colors[i].value;
	   }
	}

	var thorns = document.getElementById('flowerThorns').value
	
	var quant = document.getElementById('quant').value
	//quant == '4'
	var quantCount = parseInt(quant)
	for(var i = 0; i < quantCount; i++) {
		var flower = new Product(type, selectedColor, thorns)
		productArr.push(flower)	
	}
	
	console.log(productArr)
	
    //var flower = new Product(type, selectedColor, thorns)
	
	//productArr.push(flower)	
	
	updateCartNumber(productArr.length)
}

function updateCartNumber(num) {
	var cartCount = document.getElementById('cartCount')
	
	cartCount.innerHTML = num
}

//page unload or page navigation event in vanilla javascript
//vanilla javascript alert button events
function goToCheckoutPage() {
	//Store our existing data structure of products into localStorage
	//Then navigate to the checkout page
	
	//Set the product order in local storage
	//The 'productArr' variable is an array of product objects we made above
	localStorage.setItem('order', JSON.stringify(productArr))
	
	window.location.replace('checkout.html')
	//If this does not work for github pages or w/e try searching for
	//vanilla javascript navigate to HTML page
}