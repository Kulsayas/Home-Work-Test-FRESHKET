import orderSchema from "../Schemas/orderSchema.js";
import { calculate } from "../service/calculator.js";
export const calculateFinal = (req, res) => {
  try {
    const validatedData = orderSchema.parse(req.body);
    const { items, memberShip } = validatedData;
    const totalPrice = calculate(items, memberShip);

    res.json({ items, grandTotal: totalPrice });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
