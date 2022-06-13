import { Request, Response, Router } from 'express';
import UserController from '../controllers/userController';

const userController = new UserController();

const userRouter = Router();

userRouter.get(
  '/',
  async (req: Request, res: Response) => {
    await userController.allUsers(req, res);
  },
);

export default userRouter;