import express from "express";
import userCTRL from "../controllers/authController.js";

const router = express.Router();

router
  .route("/login")
  .get(userCTRL.login)

router
  .route("/callback")
  .get(userCTRL.callback)

router
  .route("/token")
  .get(userCTRL.getToken)

export default router;