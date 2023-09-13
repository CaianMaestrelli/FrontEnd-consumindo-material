import getAddressFromCep from './getAddressFromCep';
document.querySelector('button').addEventListener('click', handleClick);

export async function handleClick() {
	const cep = document.querySelector('input').value;

	try {
		const addressData = await getAddressFromCep(cep);
		document.querySelector('pre').innerHTML = JSON.stringify(addressData);
	} catch (error) {
		alert(error.message);
	}
}
// async function handleClick() {
// 	const cep = inputEl.value;
// 	try{
// 		const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
// 		const data = await response.json();

// 		endereco.innerHTML = JSON.stringify(data);
// 		return data;
// 	}catch(error) {
// 		return (
// 			Swal.fire({
// 				alert: 'error',
// 				icon: 'error',
// 				text: 'Digite um CEP válido',
// 			})
// 		);
// 	}
// }