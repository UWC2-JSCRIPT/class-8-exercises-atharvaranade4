const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
let singleBookContainer = document.createElement('div')
let booksContainer = document.getElementById('books-container')


formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction.json`
  const API_KEY = 'yGs5AS33cFQ3fPssGOSy5PQDeyGqznxU'
  const URL = `${BASE_URL}?api-key=${API_KEY}` 
  console.log(URL) 


  fetch(URL)  
  .then(response => { 
    return response.json();
  })  
  .then(responseJson => { 
    console.log(responseJson);        
    displaybooks(responseJson)
  });

});

async function displaybooks(responseJson){
  for (let i = 0; i < 5; i++){

    let title = document.createElement('h1')
    title.textContent = responseJson.results.books[i].title

    let author = document.createElement('h3')
    author.textContent = responseJson.results.books[i].author
    
    let description = document.createElement('p')
    description.textContent = responseJson.results.books[i].description

    // EXTRA CREDIT
    let imageEle = document.createElement('img')
    imageEle.src = responseJson.results.books[i].book_image
        
    singleBookContainer.append(title, author, imageEle, description)
    booksContainer.append(singleBookContainer)
  }
}