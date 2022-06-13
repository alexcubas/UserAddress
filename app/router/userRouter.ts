import { Request, Response, Router } from 'express';
import UserController from '../controllers/userController';
import validate from '../middlewares/validate';
import userSchema from '../joi/userSchema';

const userController = new UserController();

const userRouter = Router();

userRouter.get(
  '/:id',
  async (req: Request, res: Response) => {
    await userController.userById(req, res);
  },
);

userRouter.get(
  '/',
  async (req: Request, res: Response) => {
    await userController.allUsers(req, res);
  },
);

userRouter.post(
  '/',
  validate(userSchema),
  async (req: Request, res: Response) => {
    await userController.createUser(req, res);
  },
);

export default userRouter;