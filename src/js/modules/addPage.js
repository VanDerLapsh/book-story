
import createElement from './createElement.js'
import bookCardTemplate from  './bookCardTemplate.js'

function addPage(data, template) {
  const catalog = document.querySelector(bookCardTemplate.wrap);
  
  data.forEach(book => {
    const card = createElement(book, bookCardTemplate);

    catalog.appendChild(card);
  })

}


export default addPage;