
var gameArr = []

//This is going to be a caption class
class Caption {
	
	
	constructor(img, caption) {
    this.img = img
    this.caption = caption

	}
}

// Starts game by generating a random image

function gameStart() {
    
     document.getElementById('imageToDisplay').src = "https://picsum.photos/id/"+getRanNum()+"/320/288/";
    autoFocus();
    
}

// triggers the local storage function

function gameOver(){
    storeCap()
    location.href ='captionDisplay.html'
}

// send array to local storage

function storeCap(){
  
    localStorage.setItem('captions', JSON.stringify(gameArr))
  }

//Creating caption object, sending to array + clearing the input field

function addCaption() {
    
    //go get the caption

    var cap = document.getElementById('captionTxt').value;
    console.log('cap');
    
    //get the image

    // var pic = document.getElementById('imageToDisplay');
    // imgData = getBase64Image(pic);
    var pic = document.getElementById('imageToDisplay').src; 
    // console.log('pic');
  
    //create object with cap + image

    var imgCap = new Caption(pic, cap);
    console.log(imgCap);
    
    //push it into the array

    gameArr.push(imgCap); 
  
    console.log('heres the gameArr');
    console.log(gameArr);

    //clear the input for the next caption

    document.getElementById('captionTxt').value = ""
    //generate new random image

    gameStart()
    
  }


// Timer

document.getElementById('timer').innerHTML =
  //sets timer amount
   00 + ":" +30;
  //auto -starts timer
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
        if(gameArr.length <= 0){
        location.reload();
        } else{
            gameOver()
        }           
    
        }
    }

// Adding a zero beofre the second if it's less than 10!!!!

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
  if (sec < 0) {sec = "59"};
  return sec;
}  

// Generates random number to append to the image collection URL to generate random image
function getRanNum(){
    var x = Math.floor(Math.random() *  (1084 - 1) + 1);
    console.log(x);
    return x;
    }


function autoFocus() {
        document.getElementById("captionTxt").focus();
   }




