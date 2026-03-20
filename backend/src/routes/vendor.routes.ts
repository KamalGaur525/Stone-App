import { Router } from "express";
import { 
    registerVendor, 
    updateVendorProfile 
} from "../controllers/vendor.controller";
import { requireAuth, requireRole } from "../middleware/auth.middleware";

const router = Router();

/**
 * --- Phase 1: Registration ---
 * New Vendor Registration (No token needed)
 */
router.post("/register", registerVendor);

/**
 * --- Phase 13: Profile Management ---
 * Update Vendor business and social media details
 */
router.patch(
    "/profile", 
    requireAuth, 
    requireRole(['vendor']), 
    updateVendorProfile
);

export default router;