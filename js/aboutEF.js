"use strict";

// const news = document.querySelector('.section_news_box');
// const newsHeight = news.getBoundingClientRect().height;
// document.addEventListener('scroll', () => {
//     news.style.opacity = 1- window.scrollY / newsHeight;
// })


const toggelBtn = document.querySelector('.headbox_menu-btn');
const headerMenu = document.querySelector('.headbox_menu');
toggelBtn.addEventListener('click', ()=> {
  headerMenu.classList.toggle('open');
});