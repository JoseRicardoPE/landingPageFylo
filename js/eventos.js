let btnMenuOpen = document.getElementById("btnMenuOpen");
    btnMenuClose = document.getElementById("btnMenuClose");
    menuResponsive = document.getElementById("headerEnlaces");
    enlaces = document.getElementById("enlaces");

btnMenuOpen.addEventListener("click", function(){
    menuResponsive.className = "header__menu active";
});

btnMenuClose.addEventListener("click", function(){
    menuResponsive.classList.remove("active");
});

enlaces.addEventListener("click", function(){
    menuResponsive.classList.remove("active");
});