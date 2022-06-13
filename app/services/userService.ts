import { IUser } from "../interface/IUser";
import UserModel from "../models/userModel";

export default class UserService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel;
  }

  async userById(id: number) {
    const result = await this.userModel.userById(id);

    if (result.length === 0) return { code: 409, data: { message: "Usuário inexistente" } }

    return { code: 200, data: result };
  }

  async allUsers() {
    const result = await this.userModel.allUsers();

    return { code: 200, data: result };
  }

  async createUser(users: IUser) {
    await this.userModel.createUser(users);

    return { code: 201, data: 'Usuário criado com sucesso' };
  }
}