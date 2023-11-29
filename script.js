const btn = document.getElementById("toggle")

const theme = document.querySelector("#theme-link");

btn.addEventListener("click",function() {


    if(theme.getAttribute("href")=="style.css") {

        theme.href = "style.css";


     } else {


            theme.href = "style.css";
        }
    
});
