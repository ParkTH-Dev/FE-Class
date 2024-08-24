const display = (quotes) => {
  let random = Math.floor(Math.random() * quotes.quotes.length);
  const result = document.querySelector("#result");
  result.innerHTML = `
   <div class="quote"> ${quotes.quotes[random].quote}</div>
   <div class="author">${quotes.quotes[random].author}</div>
  `;
};

const init = async () => {
  const response = await fetch("http://dummyjson.com/quotes");
  const quotes = await response.json();
  display(quotes);
};

init();
