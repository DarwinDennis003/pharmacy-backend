import { PharmacyService } from "../services/pharmacy.services";

const pharmacyService = new PharmacyService();

export async function getPharmacyOrders(req: Request, res: Response) {
    return pharmacyService.getPharmacyOrders(req, res);
}