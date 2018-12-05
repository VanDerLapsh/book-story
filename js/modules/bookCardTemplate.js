const bookCardTemplate = {
  wrap: '.j-member-cards',
  tag: 'div',
  tagClass: 'member-card',
  setContent: function(book) {

    return`<a href="${book.Link}" class="product-card-mini__img-wrap">
          <h2 class="product-card-mini__title">${book.name}</h2>
          <img src="img/${book.img}" alt="picture" class="product-card-mini__img">
          <p class="product-card-mini__discr">${book.descr}</p>
          <div class="product-card-mini__price">${book.price} Р</div></a>`;

    // return `<h2 class="book__name">${book.name}</h2>
    //   <p class="book__age">Возраст: ${book.age}</p>
    //   <a href="${book.socialLink}" class="book__link">${book.socialName}</a>`;
  }
}

export default bookCardTemplate;