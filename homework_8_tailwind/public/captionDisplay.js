
// pulling caption array

function capLoad() {
	
	var loadGameArr = localStorage.getItem('captions');
    gameArrParse = JSON.parse(loadGameArr);
    console.log(gameArrParse);

  var captionContainer = document.getElementById('caption-conatiner')
	for(var i = 0; i < gameArrParse.length; i++) {
        var capDisplay = gameArrParse[i];
        var image = capDisplay.img;
        var cap = capDisplay.caption;

        console.log(cap)
        
        captionContainer.innerHTML += '<div id="caption-wrapper" class=""><div id="game-square" style="width: 320px" class="flex-none  bg-gray-900 border-t-4 border-primary-300"><img class="object-cover" src= '+ image +'></div><div id="caption" style="width: 320px" class="overflow-y-auto mb-8 h-24 w-72 bg-gray-900 mt-4 rounded-md"><div><img src="img/quote.png" alt="quotes" class="w-6 h-6 ml-2 mt-2"> </div><div><p class="text-center mx-2 text-white text-lg font-light break-words">'+ cap +'</p></div></div></div>' 
         } 
    }
