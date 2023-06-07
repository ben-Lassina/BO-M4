const pink = document.getElementById("js--pink");
const black = document.getElementById("js--black");
const vliegers = document.getElementsByClassName("modal");
const red = document.getElementById("js--red");
const blue = document.getElementById("js--blue");
const product = document.getElementsByClassName("product");
let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");
let modus = "one-two-three";


pink.onclick = function(){
    for(let i = 0; i < vliegers.length; i++){
        product[i].style.display = "none";
    }
    document.getElementById("js--pinkModal").style.display = "grid";
}

const closePinkModal = document.getElementById("js--closePink")
closePinkModal.onclick = function(){
    document.getElementById("js--pinkModal").style.display = "none";
    for(let i = 0; i < vliegers.length; i++){
        product[i].style.display = "block"
    }
}

black.onclick = function(){
    for(let i = 0; i < vliegers.length; i++){
        product[i].style.display = "none";
    }
    document.getElementById("js--blackModal").style.display = "grid";
}

const closeBlackModal = document.getElementById("js--closeBlack");
closeBlackModal.onclick = function(){
    document.getElementById("js--blackModal").style.display = "none";
    for(let i = 0; i < vliegers.length; i++){
        product[i].style.display = "block"
    }
}


red.onclick = function(){
    for(let i = 0; i < vliegers.length; i++){
        product[i].style.display = "none";
    } 
    document.getElementById("js--redModal").style.display = "grid";
}

const closeRedModal = document.getElementById("js--closeRed");
closeRedModal.onclick = function(){
    document.getElementById("js--redModal").style.display = "none";
    for(let i = 0; i < vliegers.length; i++){
        product[i].style.display = "block"
    }
}


blue.onclick = function(){
    for(let i = 0; i < vliegers.length; i++){
        product[i].style.display = "none";
    } 
    document.getElementById("js--blueModal").style.display = "grid";
}

const closeBlueModal = document.getElementById("js--closeBlue");
closeBlueModal.onclick = function(){
    document.getElementById("js--blueModal").style.display = "none";
    for(let i = 0; i < vliegers.length; i++){
        product[i].style.display = "block"
    }
}

for(let i = 0; i < arrowButtons.length; i++){
    arrowButtons[i].onclick = function(){
        if(modus === "one-two-three"){
            reviews[0].style.display = "none";
            reviews[1].style.display = "none";
            reviews[2].style.display = "none";
            reviews[3].style.display = "block";
            reviews[4].style.display = "block";
            reviews[5].style.display = "block";
            modus = "four-five-six"
        }
        else{  
                reviews[0].style.display = "block";
                reviews[1].style.display = "block";
                reviews[2].style.display = "block";
                reviews[3].style.display = "none";
                reviews[4].style.display = "none";
                reviews[5].style.display = "none";  
                modus = "one-two-three"; 
        }

    }
}



