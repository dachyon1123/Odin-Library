const modal = document.querySelector('#modal')
const openModal = document.querySelector('.openButton');
const closeModal = document.querySelector('.closeButton')
const olElement = document.querySelector('#library');
const form = document.querySelector('#mainForm');

openModal.addEventListener('click', () => {
  modal.showModal();
})

closeModal.addEventListener('click', () => {
  modal.close();
})





let libraryArray = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages; 
  this.hasRead = hasRead
}

function addBookToLibrary(title, author, pages) {
  for (let i = 0; i < libraryArray.length; i++) {
    let newBook = new Book(title, pages, author);
    libraryArray.push(newBook);
    console.log(newBook)
    console.log(libraryArray)
  }


};



form.addEventListener('submit', (event) => {
  let title = document.querySelector('#name').value;
  let pages = document.querySelector('#pages').value;
  let author = document.querySelector('#author').value;

  event.preventDefault();
  
  addBookToLibrary(title, pages, author);

})

