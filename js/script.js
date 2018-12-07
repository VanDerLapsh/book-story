import addPage from './modules/addPage.js';
import booksData from './modules/bookData.js';
import bookCardTemplate from './modules/bookCardTemplate.js'



function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){

  if (document.querySelector(bookCardTemplate.wrap)) {
    // const wrap = document.querySelector(bookCardTemplate.wrap);

    addPage(booksData.books, bookCardTemplate);
  }
});
