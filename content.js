function init(){
    createDisplayBox();
    browserListeners();
}

function createDisplayBox()
{
    let display_box = document.createElement("div");
    display_box.setAttribute("id","extension");
    display_box.setAttribute("style",
    `position: absolute;
    background-color : #faea00;
    color: #000000;
    padding: 10px 15px 10px 15px;
    border-radius: 5px;
    font-family: Times New Roman;
    font-size: 15px;
    width: auto;`
    );
    document.body.appendChild(display_box);
}

function browserListeners(){
    onmousemove = function(event){
        var box = document.getElementById("extension");
        box.style.left = event.pageX + "px";
        box.style.top = event.pageY + "px";
    }

    chrome.runtime.onMessage.addListener(function(message){
        var choice = message.userChoice;
        if (choice === "Family"){
            onmousemove = function(event){ changeText("extension", getCssValue(event,"fontFamily"));
        }
        }
    })
}

function getCssValue(event, input){
    let elementOver = event.target;
    let text = elementOver.textContent;
    let cssObj = window.getComputedStyle(elementOver);
    if(text){
        return cssObj[input];
    }
    else
    {
        return null
    }

}

function changeText(id,value){
    document.getElementById(String(id)).textContent=value;
}

init();