import { db_multi_instance } from "../connection.config";
const { sequelize } = require("sequelize");
import { QueryTypes, Sequelize, literal } from "sequelize";
import {sequelizeConnect} from '../connection.config'
export class  PharmacyService{
  constructor() {}

  async   getPharmacyOrders(req: any, res: any) {
    let drugDate: any = req.params.date;
    try { 
      await sequelizeConnect(req, res);      
      await db_multi_instance.models.pharmacy_drug_order_dir
        .findAll({
          attributes : [
            "drug_order_id",
            "doctor_name",
            "patient_name",
            "gender",
            "age",
            "patient_id",
            "encounter_date",
            "dispensed_date",
            "order_status",
            "department",
            "source",
            "created_at",
            "updated_at"
          ],
          where: literal(`DATE(created_at) = '${drugDate}'`)
        })
        .then((onfulfilled: any) => {
          res.status(200).json(onfulfilled);
        });
    } catch (error) {
      res.status(500).json({
        message: error.toString(),
      });
    }
  }
}
