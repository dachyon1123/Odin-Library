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


function updateLibraryView() {
  // Getting the list element
  let libraryParent = document.querySelector('.library')
  libraryParent.textContent = '';

  for (let i = libraryArray.length - 1; i >= 0; i--) {
    const book = libraryArray[i];

    let removeBookButton = document.createElement('button');
    removeBookButton.classList.add('removeBookButton');
    removeBookButton.textContent = 'x'
    removeBookButton.addEventListener('click', () => {
      handleBookRemoval(i);
    })

    let hasReadCheckmark = document.createElement('input');
    hasReadCheckmark.type = "checkbox";
    hasReadCheckmark.name = "dynamicCheckbox"
    hasReadCheckmark.value = "check";
    hasReadCheckmark.classList.add('hasRead')


    let bookListElement = document.createElement('li');
    let bookListTextContent = document.createElement('p');
    bookListTextContent.textContent = `${book.title}, ${book.author}, ${book.pages} pages`


    libraryParent.append(bookListElement);
    bookListElement.append(bookListTextContent)
    bookListElement.append(hasReadCheckmark)
    bookListElement.append(removeBookButton)
  }
}

function handleBookRemoval(index) {
  libraryArray.splice(index, 1);
  updateLibraryView();
}




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

