const menuDiv = document.querySelector('.header-menu-sm');
const menuBtn = document.getElementById('menu-btn');
const headerMenu = document.getElementById('header-menu');
let menuBtnClicked = false;
menuBtn.addEventListener('click',()=>{
    if(menuBtnClicked === false){
        headerMenu.style.display = 'flex';
        menuBtn.style.backgroundColor = '#76c38f';
        menuBtnClicked = true;
    }else{
        headerMenu.style.display = 'none';
        menuBtn.style.backgroundColor="transparent";
        menuBtnClicked = false;
    }
});
function resized(){
    if(window.innerWidth>910){
        headerMenu.style.display = 'none';
        menuBtn.classList.remove('clicked');
        menuBtnClicked = false;
    }
    checkWidth();
}
let checkWidth= function(){
    if(window.innerWidth < 520){
        menuBtn.innerHTML = "<i class='fa fa-bars'></i>";
        menuDiv.style.flex = '0';
    }
    if(window.innerWidth > 520 && window.innerWidth < 910){
        menuBtn.innerHTML = "MENU";
        menuDiv.style.flex = '0';
    }
};
document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (menuBtnClicked == true && target.classList.contains('sm') == false && target.classList.contains('fa-bars') == false){
        headerMenu.style.display = 'none';
        menuBtn.style.backgroundColor="transparent";
        menuBtnClicked = false;
    }
}, false);