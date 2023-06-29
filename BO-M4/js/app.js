const kitevlieger = document.getElementById("js--kitevlieger");
const vliegers = document.getElementsByClassName("product");
const vleermuis = document.getElementById("js--blackmodal");

kitevlieger.onclick = function(){
    for(let i = 0; i < vliegers.length; i++){
        vliegers[i].style.display = "none";
    }
    document.getElementById("js--pinkModal").style.display = "grid";
}
