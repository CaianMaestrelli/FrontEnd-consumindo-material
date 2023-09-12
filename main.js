const cep = document.createElement('input');
cep.setAttribute('type', 'text');
cep.setAttribute('class', 'cep');
document.body.appendChild(cep);

const btn = document.createElement('button');
btn.setAttribute('class', 'btn');
btn.innerHTML = 'Click me';
document.body.appendChild(btn);

btn.addEventListener('click', async () => {
	const response = await fetch(`viacep.com.br/ws/${cep}/json/`);
});
// const btnSearch = document.('button');
// const cep = document.querySelector('.input-search');

// btn.addEventListener('click', await () => {

// 	const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
// 	const data = await response.json();
// 	console.log(data);
// });
