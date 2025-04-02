import { Json } from "sequelize/lib/utils";
import db from "../models/index";
import doctorService from "../services/doctorService";
import { response } from "express";

let getTopDoctorHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) {
    limit = 10;
  }
  try {
    let response = await doctorService.getTopDoctorHome(+limit);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server ...",
    });
  }
};

let getAllDoctors = async (req, res) => {
  try {
    let doctors = await doctorService.getAllDoctorss();
    return res.status(200).json(doctors);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server ...",
    });
  }
};
let postInforDoctor = async (req, res) => {
  let message = await doctorService.saveInforDoctorService(req.body);

  return res.status(200).json(message);
};
let getDetailDoctorById = async (req, res) => {
  try {
    if (!req.query.id) {
      return res.status(200).json({
        errCode: 3,
        message: "Missing req.query.id",
      });
    }
    let infor = await doctorService.getDetailDoctorByIdService(req.query.id);
    return res.status(200).json(
      infor //là một object không cần {}
    );
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server ...",
    });
  }
};
let bulkCreateSchedule = async (req, res) => {
  try {
    let response = await doctorService.bulkCreateScheduleService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server ...",
    });
  }
};
module.exports = {
  getTopDoctorHome: getTopDoctorHome,
  getAllDoctors: getAllDoctors,
  postInforDoctor: postInforDoctor,
  getDetailDoctorById: getDetailDoctorById,
  bulkCreateSchedule: bulkCreateSchedule,
};
