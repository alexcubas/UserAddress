import UserService from "../services/userService";
import { Request, Response } from "express";

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService;
  }

  async userById(req: Request, res: Response) {
    const { id } = req.params

    const { code, data } = await this.userService.userById(Number(id));

    return res.status(code).json(data);
  }

  async allUsers(_req: Request, res: Response) {
    const { code, data } = await this.userService.allUsers();

    return res.status(code).json(data);
  }

  async createUser(req: Request, res: Response) {
    const { code, data } = await this.userService.createUser(req.body);

    return res.status(code).json(data);
  }
}