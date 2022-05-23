const navSelector = document.querySelector("nav");
const openMenuSelector = document.querySelector(".open-menu");
const closeMenuSelector = document.querySelector(".close-menu");
const menuExpanded = document.querySelector(".menu-expanded");
const bodySelector = document.querySelector("body");
const menuASelector = document.querySelector('.menu .button');
const menuAllSelector=document.querySelector(".menu *");
const backToTopButtonSelector=document.querySelector("#backToTopButton");


onScroll();

function onScroll() {
  showNavScroll();
  showBackToTopButtonOnScroll();
  activateMenuAtCurrentSelection(home);
  activateMenuAtCurrentSelection(services);
  activateMenuAtCurrentSelection(about);
  activateMenuAtCurrentSelection(contact);
}

function activateMenuAtCurrentSelection(section){
  //linha alvo
  const targetLine=scrollY + innerHeight  / 2;

  //verificar se seção passou a linha
  //quais dados vou precisar?
  const sectionTop=section.offsetTop;
  console.log(sectionTop);

  //altura da seção
  const sectionHeight=section.offsetHeight;

  //o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline=targetLine>=sectionTop;
  console.log("O topo da seção passou da linha ? ",sectionTopReachOrPassedTargetline);

  //verificar se a base está abaixo da linha alvo
  //quais dados vou precisar?

  //a seção termina onde?
  const sectionEndsAt=sectionTop + sectionHeight;

    //o final da seção passou a linha alvo
  const sectionEndPassedTargetline=sectionEndsAt <= targetLine;
  console.log("O fundo da seção passou da linha ?",sectionEndPassedTargetline);

  //limites da seção
  const sectionBoundaries=sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;
  const sectionId=section.getAttribute('id');

  const menuElement=document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove('active');
  if(sectionBoundaries){
    menuElement.classList.add("active");
  }
}

function showNavScroll(){
  if (window.scrollY > 0) {
    navSelector.classList.add("scroll");
  } else {
    console.log("aqui");
    navSelector.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll(){
  if(window.scrollY>500){
    backToTopButtonSelector.classList.add("show");
  }else{
    backToTopButtonSelector.classList.remove("show");
  }
}

function openMenu() {
  console.log("!menuExpanded ",!menuExpanded);
  console.log("!!menuExpanded ",!!menuExpanded);
  if (!menuExpanded) {
    bodySelector.classList.toggle("menu-expanded");
  } else {
    bodySelector.classList.remove("menu-expanded");
  }
}
function menuExpandedExist(){
  console.log("MenuExpanded ",!menuExpanded);
  console.log(bodySelector)
  if(!menuExpanded) {
    console.log("entrou aqui ")
    bodySelector.classList.remove("menu-expanded");
  };
}


window.addEventListener("load",()=>{
  window.scroll(0,0);
  navSelector.classList.remove("scroll");
})



window.addEventListener("scroll", onScroll);
openMenuSelector.addEventListener("click", openMenu);
closeMenuSelector.addEventListener("click", openMenu);
menuAllSelector.addEventListener("click", menuExpandedExist);
menuASelector.addEventListener("click",menuExpandedExist);

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
 #home,
 #home img,
 #home .stats,
 #services
 #services header
 #services .card,
 #about header
 #about .content`);


