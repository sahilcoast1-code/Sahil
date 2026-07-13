// SAHIL COAST LANGUAGE SYSTEM


function changeLanguage(lang){


    // حفظ اللغة

    localStorage.setItem("language", lang);



    // تغيير اتجاه الموقع

    if(lang === "ar" || lang === "he"){

        document.documentElement.dir = "rtl";

    } else {

        document.documentElement.dir = "ltr";

    }



    // تغيير النصوص

    document.querySelectorAll("[data-en]").forEach(element => {


        element.innerHTML = element.dataset[lang];


    });



    // إخفاء شاشة اللغة

    let screen = document.getElementById("languageScreen");


    if(screen){

        screen.style.opacity = "0";


        setTimeout(()=>{

            screen.style.display = "none";

        },500);

    }


}




// عند فتح الموقع


window.addEventListener("load", ()=>{


    let savedLanguage = localStorage.getItem("language");



    if(savedLanguage){


        changeLanguage(savedLanguage);


    }


});
window.addEventListener("load",()=>{

setTimeout(()=>{

let intro = document.getElementById("intro");

if(intro){

intro.style.display="none";

}

},2500);

});
