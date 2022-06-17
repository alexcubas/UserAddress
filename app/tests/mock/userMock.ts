const allUsers = [
	{
		id: 1,
		nome: "alex",
		email: "alex@gmail.com",
		address: {
			cep: "81670-180",
			logradouro: "Rua Cascavel",
			bairro: "Boqueirão",
			localidade: "Curitiba",
			uf: "PR"
		}
	},
	{
		id: 2,
		nome: "rodrigo",
		email: "rodrigao@hotmail.com",
		address: {
			cep: "59042-505",
			logradouro: "Praça Adonina Damasceno Pinto",
			bairro: "Nordeste",
			localidade: "Natal",
			uf: "RN"
		}
	},
	{
		id: 3,
		nome: "breno",
		email: "breno123@gmail.com",
		address: {
			cep: "59042-110",
			logradouro: "Rua Alfredo Edeltrudes",
			bairro: "Nordeste",
			localidade: "Natal",
			uf: "RN"
		}
	}
]

const mockById = {
	id: 1,
	nome: "alex",
	email: "alex@gmail.com",
	address: {
		cep: "81670-180",
		logradouro: "Rua Cascavel",
		bairro: "Boqueirão",
		localidade: "Curitiba",
		uf: "PR"
	}
}

export {
	allUsers,
	mockById
}