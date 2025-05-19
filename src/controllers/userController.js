import { Json } from "sequelize/lib/utils";
import db from "../models/index";
import userService from "../services/userService";

let hanldeCreateNewUser = async (req, res) => {
  let message = await userService.createNewUser(req.body);
  return res.status(200).json(message);
};
let getInspectionSchedule = async (req, res) => {
  try {
    let infor = await userService.getInspectionScheduleService(
      req.query.mucdich
    );
    return res.status(200).json(infor);
  } catch (error) {
    console.log(error);
    res.status(200).json({
      errCode: -1,
      message: "Error from server ...",
    });
  }
};
let getBusinessSchedule = async (req, res) => {
  try {
    let infor = await userService.getBusinessScheduleService(req.query.malich);
    return res.status(200).json(infor);
  } catch (error) {
    console.log(error);
    res.status(200).json({
      errCode: -1,
      message: "Error from server ...",
    });
  }
};
let getErrorPunish = async (req, res) => {
  try {
    let infor = await userService.getErrorPunishService();
    return res.status(200).json(infor);
  } catch (error) {
    console.log(error);
    res.status(200).json({
      errCode: -1,
      message: "Error from server ...",
    });
  }
};
let getFacilityOwner = async (req, res) => {
  try {
    let infor = await userService.getFacilityOwnerService(req.query.macoso);
    return res.status(200).json(infor);
  } catch (error) {
    console.log(error);
    res.status(200).json({
      errCode: -1,
      message: "Error from server ...",
    });
  }
};
let hanldeCreateNewAppraisal = async (req, res) => {
  let message = await userService.createNewAppraisalService(req.body);
  return res.status(200).json(message);
};
module.exports = {
  hanldeCreateNewUser: hanldeCreateNewUser,
  getInspectionSchedule: getInspectionSchedule,
  getBusinessSchedule: getBusinessSchedule,
  getErrorPunish: getErrorPunish,
  getFacilityOwner: getFacilityOwner,
  hanldeCreateNewAppraisal: hanldeCreateNewAppraisal,
};
