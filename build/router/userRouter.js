"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userController = new userController_1.default();
const userRouter = (0, express_1.Router)();
userRouter.get('/', async (req, res) => {
    await userController.allUsers(req, res);
});
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map