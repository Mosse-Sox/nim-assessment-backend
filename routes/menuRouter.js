const { Router } = require("express");
const menuController = require("../controllers/menuController");

const menuRouter = Router();

menuRouter.get("/", menuController.getAll);
menuRouter.put("/:id", menuController.update);
menuRouter.delete("/:id", menuController.deleteOne);
menuRouter.get("/:id", menuController.getOne);
menuRouter.post("/", menuController.create);

module.exports = menuRouter;
