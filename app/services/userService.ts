import UserModel from "../models/userModel";

export default class UserService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel;
  }

  async allUsers() {
    const result = await this.userModel.allUsers();

    return { code: 200, data: result };
  }
}