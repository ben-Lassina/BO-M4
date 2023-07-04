<<<<<<< HEAD
let allVliegers = document.getElementsByClassName("vlieger");
let filters = document.getElementsByClassName("filter");

for(let i = 0; i < filters.length; i++){
    filters[i].checked = true
}

//Kitevlieger filter
let kitevliegerfilter = document.getElementsByClassName("filter");

kitevliegerfilter[0].onchange = function(){ 
    if(kitevliegerfilter[0].checked === true)
    for(let i = 0; i < allVliegers.length; i++){
        if(allVliegers[i].dataset.category === "onder_de_15"){
            allVliegers[i].style.display = "block";
        }
    }       
    else{
        for(let i = 0; i < allVliegers.length; i++){
                if(allVliegers[i].dataset.category === "onder_de_15"){
                    allVliegers[i].style.display = "none";
                }
        }    
    }
}

console.log(kitevliegerfilter);

//eenlijnsvlieger filter
let Eenlijnsvliegers = document.getElementsByClassName("filter")

Eenlijnsvliegers[1].onchange = function(){ 
    if(Eenlijnsvliegers[1].checked === true)
    for(let i = 0; i < allVliegers.length; i++){
        if(allVliegers[i].dataset.category === "tussen_35_en_50"){
            allVliegers[i].style.display = "block";
        }
    }       
    else{
        for(let i = 0; i < allVliegers.length; i++){
                if(allVliegers[i].dataset.category === "tussen_35_en_50"){
                    allVliegers[i].style.display = "none";
                }
        }    
    }
}

let Deltavliegers = document.getElementsByClassName("filter")

Deltavliegers[2].onchange = function(){ 
    if(Deltavliegers[2].checked === true)
    for(let i = 0; i < allVliegers.length; i++){
        if(allVliegers[i].dataset.category === "boven_de_300"){
            allVliegers[i].style.display = "block";
        }
    }       
    else{
        for(let i = 0; i < allVliegers.length; i++){
                if(allVliegers[i].dataset.category === "boven_de_300"){
                    allVliegers[i].style.display = "none";
                }
        }    
    }
=======
let allVliegers = document.getElementsByClassName("vlieger");
let filters = document.getElementsByClassName("filter");

for(let i = 0; i < filters.length; i++){
    filters[i].checked = true
}

//Kitevlieger filter
let kitevliegerfilter = document.getElementsByClassName("filter");

kitevliegerfilter[0].onchange = function(){ 
    if(kitevliegerfilter[0].checked === true)
    for(let i = 0; i < allVliegers.length; i++){
        if(allVliegers[i].dataset.category === "onder_de_15"){
            allVliegers[i].style.display = "block";
        }
    }       
    else{
        for(let i = 0; i < allVliegers.length; i++){
                if(allVliegers[i].dataset.category === "onder_de_15"){
                    allVliegers[i].style.display = "none";
                }
        }    
    }
}

console.log(kitevliegerfilter);

//eenlijnsvlieger filter
let Eenlijnsvliegers = document.getElementsByClassName("filter")

Eenlijnsvliegers[1].onchange = function(){ 
    if(Eenlijnsvliegers[1].checked === true)
    for(let i = 0; i < allVliegers.length; i++){
        if(allVliegers[i].dataset.category === "tussen_35_en_50"){
            allVliegers[i].style.display = "block";
        }
    }       
    else{
        for(let i = 0; i < allVliegers.length; i++){
                if(allVliegers[i].dataset.category === "tussen_35_en_50"){
                    allVliegers[i].style.display = "none";
                }
        }    
    }
}

let Deltavliegers = document.getElementsByClassName("filter")

Deltavliegers[2].onchange = function(){ 
    if(Deltavliegers[2].checked === true)
    for(let i = 0; i < allVliegers.length; i++){
        if(allVliegers[i].dataset.category === "boven_de_300"){
            allVliegers[i].style.display = "block";
        }
    }       
    else{
        for(let i = 0; i < allVliegers.length; i++){
                if(allVliegers[i].dataset.category === "boven_de_300"){
                    allVliegers[i].style.display = "none";
                }
        }    
    }
>>>>>>> 7216727c352c05847698c1e3e0e555e36cc2305c
}