import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  // Get orders
  const orders = await prisma.order.findMany({
    where: {
      state: false,
    },
  });

  res.status(200).json(orders);

  // Create orders
  if (req.method === "POST") {
    const { name, date, total, items } = req.body;

    const order = await prisma.order.create({
      data: {
        name,
        date,
        total,
        items,
      },
    });

    res.status(200).json(order);
  }
}
