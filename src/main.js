const btnSearch = document.querySelector('button');
const inputEl = document.querySelector('input');

const endereco = document.querySelector('pre');

btnSearch.addEventListener('click', handleClick);

async function handleClick() {
	const cep = inputEl.value;
	try{
		const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
		const data = await response.json();

		endereco.innerHTML = JSON.stringify(data);
		return data;
	}catch(error) {
		return error.mesaage;
	}
}