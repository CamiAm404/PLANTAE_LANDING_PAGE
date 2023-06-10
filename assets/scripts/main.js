/* Archivo para el codigo en javascript */
function OnScroll(){
    var header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
}

function OnBackToTopClick(){
    window.scrollTo(0,0);
}

window.addEventListener("scroll",OnScroll);

window.onload=function(){
    document.getElementById("back-to-top-img").onclick=OnBackToTopClick;
}
