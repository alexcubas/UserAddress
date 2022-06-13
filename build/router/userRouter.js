"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const validate_1 = require("../middlewares/validate");
const userSchema_1 = require("../joi/userSchema");
const userController = new userController_1.default();
const userRouter = (0, express_1.Router)();
userRouter.get('/:id', async (req, res) => {
    await userController.userById(req, res);
});
userRouter.get('/', async (req, res) => {
    await userController.allUsers(req, res);
});
userRouter.post('/', (0, validate_1.default)(userSchema_1.default), async (req, res) => {
    await userController.createUser(req, res);
});
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map