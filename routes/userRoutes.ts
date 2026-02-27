import express from "express";
import userCTRL from "../controllers/userController.js";

const router = express.Router();

router
  .route("/")
  .post(userCTRL.createUser)
  .get(userCTRL.getAll);

router
  .route("/:id")
  .patch(userCTRL.patchOne)
  .delete(userCTRL.deleteOne)
  .get(userCTRL.getOne);

export default router;