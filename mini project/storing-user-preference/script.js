//find and select
const  forntSelect = document.querySelector("#fontSize");
const  bgSelect = document.querySelector("#fontBgColor");

const resetButton = document.querySelector("#reset");

const cardBody = document.querySelector(".card-body");

const setValue = (fontSize,bgColor) =>{
    cardBody.style.fontSize = fontSize;
    cardBody.style.background = bgColor;

    forntSelect.value = fontSize;
    bgSelect.value = bgColor;
}

//initialize Set value in localstorage
const initialStyle = () => {
    //get locarstorage value
    const fontSize = localStorage.getItem("fontsize");
    const bgColor = localStorage.getItem("bgColor");

    if (fontSize && bgColor) {
        setValue(fontSize,bgColor);
    }
    if (!fontSize && !bgColor) {
        setValue("16px","silver");
    }

    if (!fontSize && bgColor) {
        setValue("16px",bgColor);
    }

    if (fontSize && !bgColor) {
        setValue(fontSize,"silver");
    }
    
}

//call initialStyle function 
initialStyle()

//changeFont
const changeFont = (e) =>{
    const fontSize = e.target.value;
    cardBody.style.fontSize = fontSize;
    localStorage.setItem("fontsize",fontSize)
}

//changeBgcolor
const changeBgColor = (e) =>{
    const bgColor = e.target.value;
    cardBody.style.background = bgColor;
    localStorage.setItem("bgColor",bgColor)
}

//clearLocalstorage
const clearLocalstorage  = () =>{
    localStorage.removeItem("fontsize")
    localStorage.removeItem("bgColor")

    //set defult value 
    setValue("16px","silver");
}





//add Event Listener 
forntSelect.addEventListener('change', changeFont);
bgSelect.addEventListener('change', changeBgColor);
resetButton.addEventListener('click',clearLocalstorage);
