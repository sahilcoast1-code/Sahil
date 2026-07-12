// Navbar Effect

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

header.style.background = "rgba(0,0,0,.75)";
header.style.padding = "15px 7%";

}else{

header.style.background = "rgba(0,0,0,.35)";
header.style.padding = "20px 7%";

}

});
