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

/**
 * 43.DOM Event | Event Object | onchange event
 */



//change event using input

// var input = document.querySelector("input[name=name]");
// input.addEventListener("change",function(e){
//     console.log(e.target.name);//return target name
//     console.log(e.target.value);//return target value
// })


//change event using checkbox 

// var checkbox = document.querySelectorAll("input");
// console.log(checkbox);//NodeList(2)0: input#vehicle11: input#vehicle2length: 2[[Prototype]]: NodeList
// //right now NodeList to array convart 
// Array.from(checkbox).map((box)=>{
//     box.addEventListener('change',eventHandle);
// })
// function eventHandle(e) {
//     if (e.target.checked) {
//         console.log(`${e.target.value} is checked`);
//     }else{
//         console.log(`${e.target.value} is unchecked`)
//     }
// }

//change event using selected 

// var programs = document.querySelector("#program");
// programs.addEventListener("change",function(e){
//     console.log((e.target.value));
// })


/**
 * 44.DOM Event | Event Object | onSubmit event
 */
// var form = document.querySelector("form");

// var user_name = form.querySelector("div #name");
// var user_email = form.querySelector("div #email");
// var user_password = form.querySelector("div #password");

// //add event 
// form.addEventListener('submit',formHandeler);

// function formHandeler(e){
//     e.preventDefault();
    
//     //create object
//     var userInfo = {
//         name : user_name.value,
//         email : user_email.value,
//         password : user_password.value
//     }
//     console.table([userInfo]);
//     //reset value after submit
//     user_name.value="";
//     user_email.value="";
//     user_password.value="";
// }




/**
 * 45.DOM Event | Event Object | media events
 * 
 * canPlay,Play,Playing,Pause,Progress,ended,volumeChange,waiting
 */

// var video = document.querySelector("video");

// video.addEventListener('canplay',function(){
//     console.log("can play");//can play
// })

// video.addEventListener('play',function(){
//     console.log("video play");//video play
// })

// video.addEventListener('pause',function(){
//     console.log("video pause");//video pause
// })

// video.addEventListener('valumeChange',function(){
//     console.log("video valumeChange");//video valumeChange
// })

// video.addEventListener('ended',function(){
//     console.log("video ended");//video ended
// })



/**
 * 46.DOM Event | Event Object | load ,unload,scroll,resize,toggle
 */

    //load and unload

    // window.addEventListener('load',function(){
    //     console.log("page loaded");
    // });

    // window.addEventListener('unload',function(){
    //     console.log("page unload");
    // });

    //scroll --firt   set body height 100vh

    // window.addEventListener('scroll',function(){
    //     console.log('page scroll');
    // })

    //resize
    // window.addEventListener('resize',function(){
    //     var width = window.innerWidth;
    //     var height = window.innerHeight;

    //     console.log(`height:${height}`,`width:${width}` );
    // })

/**
 * 47.DOM Event | MouseEvent
 */




/**
 * 51.DOM Event | DragEvent
 * ondragstart
 * ondrag
 * ondragend
 * ondragenter
 * ondragleave
 * ondragover
 * ondrop
 */

//  var div = document.querySelector("#div");
//  var p = document.querySelector("#p")

//  p.addEventListener("dragstart",function(e){
//     e.dataTransfer.setData("text",e.target.id);
//  })

//  div.addEventListener("dragover",function(e){
//     e.preventDefault();
//  })

//  div.addEventListener("drop",function(e){
//     var id = e.dataTransfer.getData("text");
//     div.appendChild(document.getElementById(id));
//     e.preventDefault();
// }) 


/**
 * 52. Browser Object Model | location object
 * windows
 * location
 */
// console.clear();

// console.log(location);
//  var mainDiv = document.querySelector('.location-group');

//  var p1 = mainDiv.children[0];
//  p1.textContent = location.href;

//  var p2 = mainDiv.children[1];
//  p2.textContent = location.hostname;

 

//  var button = document.querySelector("button");
//  button.addEventListener('click',function(){
//     location.assign("https://arifurrahmanrifat.com");
//  })


/**
 * 53. Browser Object Model | Popup boxes
 * alert,confirm,prompt
 */


/**
 * 54.Browser Object Model | Timing events
 * setTimeOut()
 * setInteravl()
 */

//setTimeOut()

// setTimeout(() =>{
//     console.log("Hello from Timeout!");
// },2000)


// setTimeout(display,3000);

// function display(){
//     console.log("Hello world");
// }

//real time example ---setTimeOut()
    // var button = document.querySelector("#button");
    // var message = document.querySelector("#message");

    // button.addEventListener("click",function(){

    //     message.textContent = "user click save button";

    //     setTimeout(display,2000)

    //     function display() {
    //         message.textContent = " ";
    //     }
    // })

//real time example ---setInteravl()
    // var button = document.querySelector("#button");
    // var message = document.querySelector("#message");

    // button.addEventListener("click",function(){
    //     var count =1;
    //     message.textContent = count;

    //     setInterval(display,2000);
    //     function display() {
    //         count++;
    //         message.textContent = count;
    //     }
    // })

/**
 * 55.Browser Object Model | Create a Clock
 */
   /**  var button = document.querySelector("#button");
    var message = document.querySelector("#message");

    button.addEventListener("click",displayTime);
    function displayTime() {
        var Time    = new Date();
        var hours   = addZero(Time.getHours());
        var minutes = addZero(Time.getMinutes());
        var seconds = addZero(Time.getSeconds());

        var timeFormate = hours + ":" + minutes + ":" + seconds;

        message.textContent=timeFormate;
        setInterval(displayTime,1000);
    }

    function addZero(i){
        if (i<10) {
            i = "0"+i;
        }
        return i;
    }*/