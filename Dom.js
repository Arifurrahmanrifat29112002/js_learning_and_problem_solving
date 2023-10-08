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
 */
 //find a tag and edit
    // var link = document.getElementsByTagName('a')[0];
    // link.style.textDecoration="none";

    // link.style.color ="red";
    // link.href="http//:www.arifurrahmanrifat.com";


//create new html element 
    var p = document.createElement("p");//create element
    var text = document.createTextNode("assalamu alaikum");//add value 
    p.appendChild(text);

    var divId = document.getElementById('divId');//find div
    divId.appendChild(p);
//create new html element show upper section 
   var  h1= document.createElement("h1");
   var h1Text = document.createTextNode("welcome");
   h1.appendChild(h1Text);


   var divId = document.getElementById("divId");//find div 
   var firstChildElement = divId.firstChild;//get fist element
   divId.insertBefore(h1,firstChildElement);

//find html element then remove this element
var firstChild = document.getElementsByTagName("h1")[1];
divId.removeChild(firstChild); 