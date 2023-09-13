import { fetchAPIPokemon } from '../helpers/fetchAPIPokemon';

describe('Testa o retorno da API', () => {
	test('Realiza com sucesso a requisição para a API', async () => {
		const data = await fetchAPIPokemon('pikachu');
		console.log(data);
		expect(data.name).toBe('pikachu');
		expect(data.height).toBe(4);
		expect(data.weight).toBe(60);
	});

	test('Verifica se um erro é gerado ao não passar um nome de Pokemon', async () => {
		await expect(fetchAPIPokemon('pikachuuuuu'))
			.rejects.toThrow(new Error());
	});
});