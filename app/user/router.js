const router = require("express").Router();
const Controller = require("./controller");

router.get("/", Controller.GetOrders);
router.get("/getById/:id", Controller.GetOrder);
router.post("/addUser", Controller.AddOrder);
router.patch("/updateUser/:id", Controller.UpdateOrder);
router.delete("/deleteUser/:id", Controller.DeleteOrder);

module.exports = router;
