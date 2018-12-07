const bookCardTemplate = {
  wrap: '.j-book-cards',
  tag: 'div',
  tagClass: 'book-card',
  setContent: function(book) {

    return`<a href="${book.Link}" class="book-card__link">
          <h2 class="book-card__title">${book.name}</h2>
          <img class="book-card__img" src="img/${book.img}" alt="picture">
          <p class="book-card__descr">${book.descr}</p>
          <div class="book-card__price">${book.price} Р</div></a>`;

    // return `<h2 class="book__name">${book.name}</h2>
    //   <p class="book__age">Возраст: ${book.age}</p>
    //   <a href="${book.socialLink}" class="book__link">${book.socialName}</a>`;
  }
}

export default bookCardTemplate;