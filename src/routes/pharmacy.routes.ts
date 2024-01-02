import { Router } from "express";
import { getPharmacyOrders } from "../controllers/pharmacy.controller";
import { API_VERSION } from "../constant";

const router = Router();

router.route('/pharmacy/orders').get(getPharmacyOrders);

export default router;
