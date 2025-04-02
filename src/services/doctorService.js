import { where } from "sequelize";
import db from "../models/index";
import _ from "lodash";

require("dotenv").config();

const MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE;

let getTopDoctorHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await db.User.findAll({
        limit: limitInput,
        where: { roleId: "R2" },
        order: [["createdAt", "DESC"]],
        attributes: {
          exclude: ["password"], //Không hiển thị lên password
        },
        include: [
          {
            model: db.Allcode,
            as: "positionData",
            attributes: ["valueEn", "valueVi"],
          },
          {
            model: db.Allcode,
            as: "genderData",
            attributes: ["valueEn", "valueVi"],
          },
        ],
        raw: true,
        nest: true,
      });
      resolve({
        errCode: 0,
        data: users,
      });
    } catch (error) {
      reject(error);
    }
  });
};
let getAllDoctorss = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let doctors = await db.User.findAll({
        where: { roleId: "R2" },
        attributes: {
          exclude: ["password", "image"],
        },
      });
      resolve({
        errCode: 0,
        data: doctors,
      });
    } catch (error) {
      reject(error);
    }
  });
};

let saveInforDoctorService = (dataInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !dataInput.doctorId ||
        !dataInput.contentHTML ||
        !dataInput.contentMarkdown ||
        !dataInput.action
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        if (dataInput.action === "CREATE") {
          await db.Markdown.create({
            contentHTML: dataInput.contentHTML,
            contentMarkdown: dataInput.contentMarkdown,
            description: dataInput.description,
            doctorId: dataInput.doctorId,
          });
          resolve({
            errCode: 0,
            errMessage: "Save infor doctor success !",
          });
        } else if (dataInput.action === "EDIT") {
          let markdown = await db.Markdown.findOne({
            where: { doctorId: dataInput.doctorId },
            raw: false,
          });
          if (markdown) {
            markdown.contentHTML = dataInput.contentHTML;
            markdown.contentMarkdown = dataInput.contentMarkdown;
            markdown.description = dataInput.description;

            await markdown.save();
          }
          resolve({
            errCode: 0,
            errMessage: "Edit infor doctor success !",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};
let getDetailDoctorByIdService = (InputId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!InputId) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter",
        });
      } else {
        let data = await db.User.findOne({
          where: {
            id: InputId,
          },
          attributes: {
            exclude: ["password"], //Không hiển thị lên password
          },
          include: [
            {
              model: db.Markdown,
              attributes: ["description", "contentHTML", "contentMarkdown"],
            },
            {
              model: db.Allcode,
              as: "positionData",
              attributes: ["valueEn", "valueVi"],
            },
          ],
          raw: false,
          nest: true,
        });
        if (data && data.image) {
          data.image = new Buffer(data.image, "base64").toString("binary");
        }
        if (!data) {
          data = {};
        }
        resolve({
          errCode: 0,
          data: data,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
let bulkCreateScheduleService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if ((!data.arrSchedule, !data.doctorId, !data.formateDate)) {
        resolve({
          errCode: 1,
          errMessage: "Missing required param !",
        });
      } else {
        let schedule = data.arrSchedule;
        if (schedule && schedule.length > 0) {
          schedule = schedule.map((item) => {
            item.maxBumber = MAX_NUMBER_SCHEDULE;
            return item;
          });
        }
        let existing = await db.Schedule.findAll({
          where: { doctorId: data.doctorId, date: data.formateDate },
          attributes: ["timeType", "date", "doctorID", "maxBumber"],
          raw: true,
        });

        if (existing && existing.length > 0) {
          existing = existing.map((item) => {
            item.date = new Date(item.date).getTime();
            return item;
          });
        }

        let toCreate = _.differenceWith(schedule, existing, (a, b) => {
          return a.timeType === b.timeType && a.doctorId === b.doctorId;
        });
        console.log("existingggggggggggg", existing);
        console.log("tocreateeeeeeeeeeeee", toCreate);

        if (toCreate && toCreate.length > 0) {
          await db.Schedule.bulkCreate(toCreate);
        }

        // console.log("NVCCCC", schedule);
        // console.log("check kiểu của data", typeof data);
        resolve({
          errCode: 0,
          errMessage: "OK",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  getTopDoctorHome: getTopDoctorHome,
  getAllDoctorss: getAllDoctorss,
  saveInforDoctorService: saveInforDoctorService,
  getDetailDoctorByIdService: getDetailDoctorByIdService,
  bulkCreateScheduleService: bulkCreateScheduleService,
};
