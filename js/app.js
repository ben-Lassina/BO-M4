const pink = document.getElementById("js--pink");
const black = document.getElementById("js--black");
const vliegers = document.getElementsByClassName("modal");
const red = document.getElementById("js--red");
const blue = document.getElementById("js--blue");
const addToCartButtons = document.getElementsByClassName("product--button");
const product = document.getElementsByClassName("product");
let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");
const cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
const vliegerGeel = document.getElementById("js--yellow--button");


let modus = "one-two-three";
let cartMessage = 0;
let Kitevlieger = 0;
let Vleermuis = 0;
let blauwe_vlinder = 0;
let Deltavlieger = 0;
let KitevliegerPrice = 0;
let VleermuisPrice = 0;
let KoalaPrice = 0;
let blauwe_vlinderPrice = 0;
let DeltavliegerPrice = 0;

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

        for(let i = 0; i < addToCartButtons.length; i++){
            addToCartButtons[i].onclick = function(){
                cartMessage += 1;
                cartMessageValue.innerHTML = cartMessage;
                switch(addToCartButtons[i].dataset.product){
                    case "Kitevlieger":
                        Kitevlieger += 1;
                        KitevliegerPrice += 37;
                        break;
                    case "Vleermuis":
                        Vleermuis += 1;
                        VleermuisPrice += 14;
                        break;
                    case "blauwe_vlinder":
                        blauwe_vlinder += 1;
                        blauwe_vlinderPrice += 18;
                        break;
                    case "Deltavlieger":
                        Deltavlieger += 1;
                        DeltavliegerPrice += 335;
                }
    }
}
    
const checkoutButton = document.getElementById("js--checkoutButton");
const checkoutWindow = document.getElementById("js--checkoutWindow");
const buttons = document.getElementsByClassName("fa-solid");
let checkoutIsOpen = false;

checkoutButton.onclick = function(){
    if(checkoutIsOpen === false){
        document.querySelector("main").style.display = "none";
        checkoutWindow.style.display = "block";
        checkoutIsOpen = true;
        document.getElementById("js--amount-kitevlieger").innerHTML = Kitevlieger + "x";
        document.getElementById("js--amount-vleermuis").innerHTML = Vleermuis + "x";
        document.getElementById("js--amount-vlinder").innerHTML = blauwe_vlinder + "x";
        document.getElementById("js--price-kitevlieger").innerHTML = KitevliegerPrice + "€";
        document.getElementById("js--price-vleermuis").innerHTML = VleermuisPrice + "€";
        document.getElementById("js--price-vlinder").innerHTML = blauwe_vlinderPrice + "€";
        document.getElementById("js--price-delta").innerHTML = DeltavliegerPrice + "€";
        document.getElementById("js--total__price").innerHTML = KitevliegerPrice + VleermuisPrice + blauwe_vlinderPrice + DeltavliegerPrice + "€";

        document.getElementById("js--cartbutton").style.display = "none";
        document.getElementById("js--returnbutton").style.display = "block";
        return
    }
    document.querySelector("main").style.display = "block";
    checkoutWindow.style.display = "none";
    checkoutIsOpen = false;
    document.getElementById("js--cartbutton").style.display = "block";
    document.getElementById("js--returnbutton").style.display = "none";
}

const yellowkite = document.getElementById("js--yellow--kite");
const yellowbutton = document.getElementById("js--yellow--button");
const pinkbutton = document.getElementById("js--pink--button")
const pinkkite = document.getElementById("js--pink--kite");
const bluebutton = document.getElementById("js--blue--button");
const bluekite = document.getElementById("js--blue--kite");
const productvliegers = document.getElementsByClassName("product__image")
let yellowkiteIsopen = false;
let pinkkiteIsOpen = false;
let bluekiteIsopen = false;

bluebutton.onclick = function(){
    {
    pinkkite.setAttribute('display','none');
    bluekite.getAttribute("src", '/img/kitevliege_blauw_1.webp');

    document.getElementById("js--blue--kite").style.display = "block"
    document.getElementById("js--pink--kite").style.display = "none"
    document.getElementById("js--yellow--kite").style.display = "none"
    }
}

vliegerGeel.onclick = function(){
    {
        pinkkite.setAttribute('display','none');
        yellowkite.getAttribute("src", "img/kitevlieger_geel.webp");

        document.getElementById("js--yellow--kite").style.display = "block"
        document.getElementById("js--pink--kite").style.display = "none"
        document.getElementById("js--blue--kite").style.display = "none"
    }
}

const vlinderpaars = document.getElementById("js--purple--button");
const vlinderblauw = document.getElementById("js--blauwe--vlinder");
const vlindergeel = document.getElementById("js--yellowvlinder--button");

vlinderpaars.onclick = function(){
    {
        vlinderblauw.setAttribute('display','none');
        vlinderpaars.getAttribute("src", "/img/paarse_vlindervlieger.webp");

        document.getElementById("js--paarse--vlinder").style.display = "block";
        document.getElementById("js--blauwe--vlinder").style.display = "none";
        document.getElementById("js--gele--vlinder").style.display = "none";
    }
}

vlindergeel.onclick = function(){
    vlinderblauw.setAttribute('display','none');
    vlinderpaars.getAttribute("src", "/img/vlinder_vlieger-geel.webp");

    document.getElementById("js--paarse--vlinder").style.display = "none";
    document.getElementById("js--blauwe--vlinder").style.display = "none";
    document.getElementById("js--gele--vlinder").style.display = "block";
}
