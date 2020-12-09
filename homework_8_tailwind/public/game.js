
var gameArr = []

//This is going to be a caption class
class Caption {
	
	
	constructor(img, caption) {
    this.img = img
    this.caption = caption

	}
}

//Creating caption object and sending to array

function addCaption() {
    gameStart()
    //getcaption
    var cap = document.getElementById('captionTxt').value;
    console.log('cap');
    
    //get image
    var pic = document.getElementById('imageToDisplay').src; 
    console.log('pic');
  
    var caption = new Caption(pic, cap);
    console.log(caption);
  
    gameArr.push(caption); 
  
    console.log('heres the gameArr');
    console.log(gameArr);

    document.getElementById('captionTxt').value = ""
    
  }

  // sending array to local storage

function storeCap(){
  
    localStorage.setItem('captions', JSON.stringify(gameArr))
    alert('yall stored yo captions')
  }




//TIMER//

document.getElementById('timer').innerHTML =
   002 + ":" +00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
//   console.log(m)
  setTimeout(startTimer, 1000);
  if(m<0){
    document.getElementById('timer').innerHTML = 000 +":" +00;
    gameOver()
    }
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}  

function getRanNum(){
    var x = Math.floor(Math.random() * 99);
    console.log(x);
    return x;
    }

function gameStart() {
    // document.getElementById('imageToDisplay').src = "https://source.unsplash.com/collection/466697/${getRanNum()}";
    document.getElementById('imageToDisplay').src = "https://source.unsplash.com/collection/778914/" + getRanNum();
}

function gameOver(){
    storeCap()
    location.href ='captionDisplay.html'
}

// function getImage(){

// }

// const requestUrl = 'https://source.unsplash.com/random';
// const getImagesButton = document.getElementById('getImagesBtn');
// const imageToDisplay = document.getElementById('imageToDisplay');;

//     getImagesButton.addEventListener('click', /*async () => */{
//       let randomImage = await getNewImage();
//       imageToDisplay.src = randomImage;
//     }); 

//     async function getNewImage() {
//       let randomNumber = Math.floor(Math.random() * 10);
//       return fetch(requestUrl)
//         .then((response) => response.json())
//         .then((data) => {
//           let allImages = data.results[randomNumber];
//           return allImages.urls.regular;
//         });
//     }



// function test(){
//     document.getElementById('game-square').innerHTML = 'TEST TEST TEST'
// }