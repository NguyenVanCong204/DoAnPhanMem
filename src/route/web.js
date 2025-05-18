import express from "express";
import userController from "../controllers/userController";

let router = express.Router();
let initWebRoutes = (app) => {
  router.post("/api/create-new-user", userController.hanldeCreateNewUser);
  router.get(
    "/api/get-inspection-schedule",
    userController.getInspectionSchedule
  );
  router.get("/api/get-business-schedule", userController.getBusinessSchedule);

  router.get("/api/get-error-punish", userController.getErrorPunish);

  router.get("/api/get-error-punish", userController.getErrorPunish);

  router.get("/api/get-error-punish", userController.getErrorPunish);

  router.get("/api/get-facility-owner", userController.getFacilityOwner);

  router.post(
    "/api/create-new-appraisal",
    userController.hanldeCreateNewAppraisal
  );

  return app.use("/", router);
};

module.exports = initWebRoutes;
