


var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn-open");


// document.getElementById("btn-open").addEventListener("click" ,open_close_menu);

function open_close_menu(){
     btn_open.classList.toggle("menu_move");
     side_menu.classList.toggle("side_move");
}

document.querySelector("#btn-open").addEventListener("click", open_close_menu);

//Si el ancho de la página es menor a 760px, ocultara el mneú al recargar la página 

if (window.innerWidth < 760){
    
     btn_open.classList.add("menu_move");
     side_menu.classList.add("side_move");
}

// haciendo el menu responsive 

window.addEventListener("resize", function(){
     
     if (window.innerWidth > 760){
          btn_open.classList.remove("menu_move");
          side_menu.classList.remove("side_move");
     }

     if (window.innerWidth < 760){
          btn_open.classList.add("menu_move");
          side_menu.classList.add("side_move");
     }

});