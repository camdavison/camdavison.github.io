function cartLoad() {
	
	var loadedProductArr = localStorage.getItem('userOrder');
	prodArrParse = JSON.parse(loadedProductArr);
  
  //birngs back prodArr that we saved from Product Page 
	
	console.log('we are on checkout page');
	console.log(prodArrParse)
	
    var cartContainer = document.getElementById('cart-container')
    var subTotal = 0
	for(var i = 0; i < prodArrParse.length; i++) {
        var pillow = prodArrParse[i];
        var quantity = pillow.quantity;
        var color = pillow.color;
        var fill = pillow.fill;
        var size = pillow.size;
        var total = pillow.total;
        subTotal = total + subTotal;
        
        cartContainer.innerHTML += '<div class="cart-item"><div class="cart-item-img"><div class="cart-item-image"> <img class="cart-image" src="resources/img/knot.svg"> </div></div> <div class="cart-item-right"><div class="cart-item-line1"><div class="cart-item-title"><h5 id="cart-item-name">Knot Pillow</h5></div><div class="cart-item-line1-detail"><div id="item-price"><p>$88.00</p></div><div id="item-quant"><img id="minus" src="resources/img/Prod/Product/minus.svg" alt="minus"><input type="text" class="counter" id="item-quant-input" value=' + quantity + ' readonly/><img id="plus" src="resources/img/Prod/Product/plus.svg" alt="plus"></div><div id="item-total-price"><p>$' +total +'.00</p></div></div></div><div class="cart-item-line2"><div class="cart-item-details"><p>Color:  ' + color + '<br>Fill: ' + fill +' <br>Size:  '+ size +'</p></div><div class="cart-item-edit-delete"><div id="item-delete"><a href="#" class="btn-thumb" onclick="deleteProduct(' + i + ')">Delete</a></div></div></div></div>'
        //cartContainer.innerHTML += '<span onclick="deleteProduct(' + i + ')">[click to delete]</span>'
        cartContainer.innerHTML += '<br /><br /><br />'
        
    }
    
    document.getElementById('cart-subtotal').innerHTML = '$' + subTotal + '.00';
    var finalTotal = subTotal + 12;
    document.getElementById('final-total').innerHTML = '$' + finalTotal + '.00';

    updateCartNumber(prodArrParse.length)
}

function deleteProduct(i) {
	alert('i : ' + i)
	console.log('before we delete')
	console.log(prodArrParse)
	
	//Remove this product object from our productArr2 
    prodArrParse.splice(i,1)
    localStorage.setItem('userOrder', JSON.stringify(prodArrParse))
	
	console.log('after we delete')
	console.log(prodArrParse)
    
    var cartContainer = document.getElementById('cart-container')
	cartContainer.innerHTML = ''
	
    var subTotal = 0
	for(var i = 0; i < prodArrParse.length; i++) {
        var pillow = prodArrParse[i];
        var quantity = pillow.quantity;
        var color = pillow.color;
        var fill = pillow.fill;
        var size = pillow.size;
        var total = pillow.total;
        subTotal = total + subTotal;
        
        cartContainer.innerHTML += '<div class="cart-item"><div class="cart-item-img"><div class="cart-item-image"> <img class="cart-image" src="resources/img/knot.svg"> </div></div> <div class="cart-item-right"><div class="cart-item-line1"><div class="cart-item-title"><h5 id="cart-item-name">Knot Pillow</h5></div><div class="cart-item-line1-detail"><div id="item-price"><p>$88.00</p></div><div id="item-quant"><img id="minus" src="resources/img/Prod/Product/minus.svg" alt="minus"><input type="text" class="counter" id="item-quant-input" value=' + quantity + ' readonly/><img id="plus" src="resources/img/Prod/Product/plus.svg" alt="plus"></div><div id="item-total-price"><p>$' +total +'.00</p></div></div></div><div class="cart-item-line2"><div class="cart-item-details"><p>Color:' + color + '<br>Fill: ' + fill +' <br>Size:'+ size +'</p></div><div class="cart-item-edit-delete"><div id="item-delete"><a href="#" class="btn-thumb" onclick="deleteProduct(' + i + ')">Delete</a></div></div></div></div>'
        cartContainer.innerHTML += '<br /><br /><br />'
        }
        document.getElementById('cart-subtotal').innerHTML = '$' + subTotal + '.00';
        var finalTotal = subTotal + 12;
        document.getElementById('final-total').innerHTML = '$' + finalTotal + '.00';
        if (subTotal == 0){
            document.getElementById('tax-line').innerHTML = '$.00'; 
            
        }

        window.location.reload(true);
    }
    
    function updateCartNumber(num) {
        var cartCount = document.getElementById('cartUpdate');
      cartCount.value = num;
      console.log('This is num');
      console.log(num);
    }