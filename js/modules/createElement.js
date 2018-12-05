

  function createElement(book, template) {
    const nodeElement = document.createElement(template.tag);
    nodeElement.classList.add(template.tagClass);

    nodeElement.innerHTML = template.setContent(book)

    console.log(template.setContent(book));

    return nodeElement;
  }

  export default createElement;