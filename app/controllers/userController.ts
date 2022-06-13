import UserService from "../services/userService";
import { Request, Response } from "express";

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService;
  }

  async allUsers(_req: Request, res: Response) {
    const { code, data } = await this.userService.allUsers();

    return res.status(code).json(data);
  }
}