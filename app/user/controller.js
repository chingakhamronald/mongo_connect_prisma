const prisma = require("../../constant/client");

module.exports = {
  async GetUsers(req, res) {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async GetUser(req, res) {
    const id = req.params.id;
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async AddUser(req, res) {
    try {
      const users = await prisma.user.create({
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

  async UpdateUser(req, res) {
    const id = req.params.id;

    try {
      await prisma.user.update({
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

  async DeleteUser(req, res) {
    const id = req.params.id;
    try {
      await prisma.user.delete({
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
