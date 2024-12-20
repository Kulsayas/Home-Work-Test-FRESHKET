import { z } from "zod";

// Schema Validation
const orderSchema = z.object({
  items: z.array(
    z.object({
      menu: z.string(), // ต้องเป็น string ที่เป็นตัวเลข
      quantity: z.number().int().min(0, "Quantity must be a integer"), // จำนวนสินค้าต้องเป็นตัวเลขจำนวนเต็ม และ >= 0
    })
  ),
  memberShip: z.boolean().optional(),
});

export default orderSchema;
