const prisma = require("../../constant/client");

module.exports = {
  async GetOrders(req, res) {
    const take = req.query.pageSize;

    const pageNo = req.query.pageNo;

    const skip = Math.max(pageNo - 1, 0) * take;

    try {
      const users = await prisma.orderPayments.findMany({
        include: { orders: true },
        skip: Number(skip),
        take: Number(take),
      });
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async GetOrder(req, res) {
    const id = req.params.id;
    try {
      const user = await prisma.orderPayments.findUnique({
        where: {
          id: id,
        },
        include: { orders: true },
      });
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async AddOrder(req, res) {
    try {
      const users = await prisma.orderPayments.create({
        data: {
          orderId: req.body.orderId,
          address: req.body.address,
          name: req.body.name,
        },
      });
      res.status(200).json({ message: err.message });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async UpdateOrder(req, res) {
    const id = req.params.id;

    try {
      await prisma.orderPayments.update({
        where: {
          id: id,
        },
        data: {
          order_id: req.body.order_id,
          name: req.body.name,
          address: req.body.address,
        },
      });
      res.status(200).json({ message: "success" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async DeleteOrder(req, res) {
    const id = req.params.id;
    try {
      await prisma.orderPayments.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: "success" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
