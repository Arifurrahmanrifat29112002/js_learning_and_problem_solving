/**
 * 31.DOM | select html elements
 */

// document.getElementById("heading1").innerHTML= "good bye good bye";//select html elements and change value
// document.getElementsByClassName("say")[0].innerHTML = "say hi";
// document.getElementsByTagName("p")[0].innerHTML="good morning";//select html elements and set tag index number and change value


/**
 * 32. query selector
 */
// document.querySelector('li a').innerHTML = "about";//li>a
// document.querySelector('p').innerHTML = "have a good day inshaallah";//select p tag
// document.querySelector('#div p').innerHTML = "say hello world"; 

/**
 * 33.Event Handler to onclick event
 */

//example-1 
    // <button onclick="myMessage()">click</button>
    // function myMessage(){
    //     alert("assalamu alaikum"); 
    // }

//example-2
// var imageLocation = document.querySelector('#imageId');   
// function imageOne(){
//     imageLocation.src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696723200&semt=ais";
// }

// function imageTwo(){
//     imageLocation.src="https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg";

// }

/**
 * 34.Find, create, add, remove html elements
 * 
 */
 //find a tag and edit
    // var link = document.getElementsByTagName('a')[0];
    // link.style.textDecoration="none";

    // link.style.color ="red";
    // link.href="http//:www.arifurrahmanrifat.com";


// //create new html element 
//     var p = document.createElement("p");//create element
//     var text = document.createTextNode("assalamu alaikum");//add value 
//     p.appendChild(text);

//     var divId = document.getElementById('divId');//find div
//     divId.appendChild(p);
// //create new html element show upper section 
//    var  h1= document.createElement("h1");
//    var h1Text = document.createTextNode("welcome");
//    h1.appendChild(h1Text);


//    var divId = document.getElementById("divId");//find div 
//    var firstChildElement = divId.firstChild;//get fist element
//    divId.insertBefore(h1,firstChildElement);

// //find html element then remove this element
// var firstChild = document.getElementsByTagName("h1")[1];
// divId.removeChild(firstChild); 



/**
 * 36.Image slider mini project
 */

// var ImageGallary = ["https://c4.wallpaperflare.com/wallpaper/968/1007/710/technology-programming-wallpaper-preview.jpg","https://c4.wallpaperflare.com/wallpaper/372/843/684/chip-connection-diagnosis-blur-wallpaper-preview.jpg","https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"];


// //find image tag
// var image = document.querySelector("img");
// //count 
// var count = 0;

// function Next(){
//   count++;
//   if(count >= ImageGallary.length){
//     count = 0;
//     image.src = ImageGallary[count];
//   }else{
//     image.src = ImageGallary[count];
//   }
  
// }

// function Pre(){
//     count--;
//     if (count < 0) {
//         count = ImageGallary.length-1
//         image.src = ImageGallary[count];
//     }else{
//         image.src = ImageGallary[count];
//     }

    
// }


/**
 * 37.changing css style dynamically
 * 1st create index
 * 2nd create css file
 * 3rd css file linking index file
 * 4th create js
 */

// var para = document.querySelector("#paraId");
// function addStyle(){
//     para.classList.add("para-style");
// }

// function removeStyle(){
//     para.classList.remove("para-style");
// }


/**
 * 38.Event Listener
 * 1st create index
 * 2nd create css file
 * 3rd css file linking index file
 * 4th create js
 */

// var h1var = document.querySelector("h1");
// h1var.addEventListener("mouseover",function(){
//   h1var.classList.add("h1-style");
// });

// h1var.addEventListener("mouseout",function(){
//     h1var.classList.remove("h1-style");
// });



/**
 * 39.Event Listeners with multiple elements
 */
// var buttonsLen = document.querySelectorAll(".button").length;

// for (var i =0; i < buttonsLen; i++) {

//     document.querySelectorAll(".button")[i].addEventListener("click",function(){
//         var text = this.innerHTML;
//         document.querySelector("h1").innerHTML = text +" button is clicked";
//     })

// }

/**
 * 40.how to play audio in javascript
 */

// for (var i = 0; i < 3; i++) {
//     document.querySelectorAll("button")[i].addEventListener('click',function(){
//         var text = this.innerHTML;

//         audioPlay(text);
//     });
// }

// function audioPlay(text){
//         switch(text){
//             case 'a':
//                 var audio = new Audio('audio_file.mp3');
//                 audio.play();
//                 break;
    
//             case 'b':
//                 var audio = new Audio('audio_file.mp3');
//                 audio.play();
//                 break;
    
//             case 'c':
//                 var audio = new Audio('audio_file.mp3');
//                 audio.play();
//                 break;
//         }
// }


/**
 * 41.How to add and remove animation
 */
// var buttonsLen = document.querySelectorAll("button").length;

// for(var i = 0; i<buttonsLen;i++){

//     document.querySelectorAll("button")[i].addEventListener('click',function(){
//         var text = this.innerHTML;
//         itemAnimation(text);
//     })
    
// }

// function itemAnimation(text){
//     var selectButton = document.querySelector("."+text);
//     selectButton.classList.add("button_animation");

//     setTimeout(function(){
//         selectButton.classList.remove("button_animation");
//     },1000);
// }


/**
 * 42.Keypress listener
 */

// for (var i =0; i < 3; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         var text = this.innerHTML;
    
//         itemAnimation(text);
//     }) 
// }

// document.addEventListener("keypress",function(event){
//     var evenT = event.key;
//      itemAnimation(evenT);
// })

// function itemAnimation(text){
//     var selectButton = document.querySelector("."+text);
//     selectButton.classList.add("button_animation");

//     setTimeout(function(){
//         selectButton.classList.remove("button_animation");
//     },1000);
// }