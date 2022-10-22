import express from "express";
import CreditController from "../controllers/creditController.js";

const router = express.Router();

router
  .get("/credit", CreditController.listCredits)
  .get("/credit/:userId", CreditController.listCreditsById)
  .get("/update/:id", CreditController.updateStatus)
  .post("/credit", CreditController.includeCredit)
  .put("/credit/:id", CreditController.updateCredit)
  .delete("/credit/:id", CreditController.deleteCredit)

export default router;   