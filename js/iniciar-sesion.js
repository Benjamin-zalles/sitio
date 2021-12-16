let iconUserOpen = document.getElementById('user-icon-open'),
     overlay = document.getElementById('overlay'),
     popop = document.getElementById('popup'),
     btnCerrarPopup = document.getElementById('btn-cerrar-popup'),
     img = document.getElementById('popup-img'),
     padre = document.getElementById('padre');

 iconUserOpen.addEventListener('click', function(){
     overlay.classList.add('active');
     popop.classList.add('active');
     img.classList.add('acitve');
     padre.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
     e.preventDefault();
     overlay.classList.remove('active');
     popop.classList.remove('active');
     padre.classList.remove('active');
});
