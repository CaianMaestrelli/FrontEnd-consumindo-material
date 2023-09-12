const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.autor');
const errorMessage = document.querySelector('.error');
const btn = document.querySelector('.get-quote');

const API_URL = 'http://dummyjson.com/quotes/random';

btn.addEventListener('click', async () => {
	try{
		const response = await fetch(API_URL);
		const data = await response.json();
		quoteText.innerText = data.quote;
		authorText.innerText = data.author;
		errorMessage.innerText = '';
	} catch (error) {
		quoteText.innerText = '';
		authorText.innerText = '';
		errorMessage.innerText = `Error getting quote: ${error.messega}`;
	}

});
