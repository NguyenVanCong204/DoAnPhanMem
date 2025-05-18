import bcrypt from "bcryptjs";
import db from "../models/index";
import { where } from "sequelize";
import { raw } from "body-parser";
import { response } from "express";
import { includes, reject } from "lodash";

let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check = await checkUserEmail(data.email);
      if (check === true) {
        resolve({
          errCode: 1,
          message:
            "Địa chỉ email này đã tồn tại , vui lòng chọn địa chỉ email khác !",
        });
      } else if (
        !data.password ||
        !data.name ||
        !data.sdt ||
        !data.cccd ||
        !data.gioitinh ||
        !data.diachi ||
        !data.ngaysinh ||
        !data.email ||
        !data.mavaitro
      ) {
        resolve({
          errCode: 2,
          message: "Vui lòng điền đầy đủ thông tin để đăng kí !",
        });
      } else {
        await db.NguoiDung.create({
          MATKHAU: data.password,
          HOTEN: data.name,
          SDT: data.sdt,
          CCCD: data.cccd,
          GIOITINH: data.gioitinh,
          DIACHI: data.diachi,
          NGAYSINH: data.ngaysinh,
          EMAIL: data.email,
          MAVAITRO: data.mavaitro,
        });
      }
      resolve({
        errCode: 0,
        message: "OK",
      });
    } catch (e) {
      reject(e);
    }
  });
};
let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.NguoiDung.findOne({
        where: { EMAIL: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};
let getInspectionScheduleService = (mucdich) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!mucdich) {
        resolve({
          errCode: 1,
          errMessage: "Missing required paramater",
        });
      } else {
        let data = await db.LichThanhTra.findOne({
          where: { MUCDICH: mucdich },
          attributes: [
            "MALICH",
            "TENLICH",
            "NGAYBATDAU",
            "NGAYKETTHUC",
            "GHICHU",
          ],
          include: [
            {
              model: db.NguoiDung,
              as: "MANGUOIDUNGData",
              attributes: ["HOTEN"],
            },
          ],
          raw: false,
          nest: true,
        });
        if (!data) {
          data = [];
        }
        resolve({
          errCode: 0,
          data: data,
        });
      }
    } catch (error) {}
  });
};
let getBusinessScheduleService = (malich) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!malich) {
        resolve({
          errCode: 1,
          errMessage: "Missing required paramater",
        });
      } else {
        let data = await db.LichThanhTra_CoSoKinhDoanh.findAll({
          where: { MALICH: malich },
          attributes: ["MALICH"],
          include: [
            {
              model: db.CoSoKinhDoanh,
              as: "MACOSOKDDATA",
              attributes: ["MACOSOKD", "TENCOSOKD", "DIACHICOSOKD", "SDT"],
            },
          ],
          raw: false,
          nest: true,
        });
        if (!data) {
          data = [];
        }
        resolve({
          errCode: 0,
          data: data,
        });
      }
    } catch (error) {}
  });
};
let getErrorPunishService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.LoiXuPhat.findAll({
        attributes: ["TENLOI", "TIENPHAT"],
        raw: false,
        nest: true,
      });
      if (!data) {
        data = [];
      }
      resolve({
        errCode: 0,
        data: data,
      });
    } catch (error) {}
  });
};
let getFacilityOwnerService = (macoso) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!macoso) {
        resolve({
          errCode: 1,
          errMessage: "Missing required paramater",
        });
      } else {
        let data = await db.CoSoKinhDoanh.findOne({
          where: { MACOSOKD: macoso },
          attributes: [],
          include: [
            {
              model: db.NguoiDung,
              as: "MANGUOIDUNGKDData",
              attributes: ["HOTEN"],
            },
          ],
          raw: false,
          nest: true,
        });
        if (!data) {
          data = [];
        }
        resolve({
          errCode: 0,
          data: data,
        });
      }
    } catch (error) {}
  });
};
let createNewAppraisalService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.macoso || !data.trangthai || !data.hinhanh || !data.noidung) {
        resolve({
          errCode: 2,
          message: "Vui lòng điền đầy đủ thông tin để xử phạt !",
        });
      } else {
        let TongTien = data.tongtienphat;
        if (data.tongtienphat === 0) {
          TongTien = 1;
        } else if (data.tongtienphat > 0) {
          TongTien = data.tongtienphat;
        }
        await db.ThamDinh.create({
          MACOSOKINHDOANH: data.macoso,
          NGAYTHAMDINH: new Date().toISOString().split("T")[0],
          TRANGTHAI: data.trangthai,
          HINHANH: data.hinhanh,
          TONGTIENPHAT: TongTien,
          NOIDUNG: data.noidung,
        });
      }
      resolve({
        errCode: 0,
        message: "OK",
      });
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  createNewUser: createNewUser,
  getInspectionScheduleService: getInspectionScheduleService,
  getBusinessScheduleService: getBusinessScheduleService,
  getErrorPunishService: getErrorPunishService,
  getFacilityOwnerService: getFacilityOwnerService,
  createNewAppraisalService: createNewAppraisalService,
};
