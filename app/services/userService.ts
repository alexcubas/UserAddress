import { IUser } from "../interface/IUser";
import Users from "../database/models/users";
import Address from "../database/models/address";

export default class UserService {

  constructor(private users = Users, private address = Address) {}

  async userById(id: number) {
    const result = await this.users.findOne({ where: { id },
    include: 
    [
      { model: Address, as: 'address', attributes: { exclude: ['id', 'user_id'] } }
    ]
    });

    if (!result) return { code: 409, data: { message: "Usuário inexistente" } }

    return { code: 200, data: result };
  }

  async allUsers() {
    const result = await this.users.findAll({
      include:
      [
        { model: Address, as: 'address', attributes: { exclude: ['id', 'user_id'] } }
      ]
    })

    return { code: 200, data: result };
  }

  async createUser(users: IUser) {
    const emailExist = await this.users.findOne({ where: { email: users.email }});
    const cepExist = await this.address.findOne({ where: { cep: users.CEP }});

    if (cepExist && emailExist) return { code: 200, data: {
      nome: users.nome,
      email: users.email, 
      CEP: users.CEP,
      logradouro: users.logradouro,
      bairro: users.bairro,
      localidade: users.localidade,
      UF: users.UF
    } }

    const newUser = await this.users.create({ nome: users.nome, email: users.email });

    const newAddress = await this.address.create({ user_id: newUser.id, cep: users.CEP, logradouro: users.logradouro,
      bairro: users.bairro, localidade: users.localidade, uf: users.UF
    });

    return { code: 201, data: {
      nome: users.nome,
      email: users.email, 
      CEP: users.CEP,
      logradouro: newAddress.logradouro,
      bairro: newAddress.bairro,
      localidade: newAddress.localidade,
      UF: users.UF
     } };
  }
}