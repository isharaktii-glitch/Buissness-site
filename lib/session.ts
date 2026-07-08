import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { sql } from "@/lib/db";

export async function getCurrentUser() {
  const token = cookies().get("gw_token")?.value;
  if (!token) return null;

  const payload = verifyToken(token);
  if (!payload) return null;

  const result = await sql`
    SELECT id, name, email, role, phone, address, bank_name, bank_acc_no, bank_acc_name, 
      kyc_status, business_name, business_model, delivery_model, business_address,
      business_location_lat, business_location_lng
    FROM users WHERE id = ${payload.id}
  `;
  if (result.length === 0) return null;

  return result[0];
}
