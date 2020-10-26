"use strict";

// const news = document.querySelector('.section_news_box');
// const newsHeight = news.getBoundingClientRect().height;
// document.addEventListener('scroll', () => {
//     news.style.opacity = 1- window.scrollY / newsHeight;
// })


const toggleBtn = document.querySelector('.headbox_menu-btn');
const headerMenu = document.querySelector('.headbox_menu');
toggleBtn.addEventListener('click', ()=> {
  var hasOpen = headerMenu.classList.contains('open');
  if(hasOpen){
    // 
    headerMenu.classList.remove('open');
    setTimeout(function(){
      headerMenu.style="display:none;";
    }, 10)
  }else{
    // open 없을경우
    headerMenu.style='display:flex;'; 
    setTimeout(function(){
      headerMenu.classList.add('open');
    },10);
  }
 
});
