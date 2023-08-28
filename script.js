const modal = document.querySelector('#modal')
const openModal = document.querySelector('.openButton');
const closeModal = document.querySelector('.closeButton')
const form = document.querySelector('#mainForm');

openModal.addEventListener('click', () => {
  modal.showModal();
})

closeModal.addEventListener('click', () => {
  modal.close();
})





let libraryArray = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let title = document.querySelector('#name').value;
  let pages = document.querySelector('#pages').value;
  let author = document.querySelector('#author').value;

  // Create the book
  let newBook = { title, pages, author }
  
  // Push to array
  libraryArray.push(newBook)

  // Update the view `updateLibraryView()
  updateLibraryView();

  // Close the modal
  modal.close();
})

function updateLibraryView() {
  // Getting the list element
  let libraryParent = document.querySelector('#library')
  libraryParent.textContent = '';

  for (let i = libraryArray.length - 1; i >= 0; i--) {
    console.log(libraryArray.length - 1)
    const book = libraryArray[i];
    let bookListElement = document.createElement('li');
    bookListElement.textContent = `${book.title}, ${book.author}, ${book.pages} pages.`

    libraryParent.append(bookListElement);

  }



}