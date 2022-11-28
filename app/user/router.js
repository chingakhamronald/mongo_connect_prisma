const router = require("express").Router();
const Controller = require("./controller");

router.get("", Controller.GetUsers);
router.get("/getById/:id", Controller.GetUser);
router.post("/addUser", Controller.AddUser);
router.patch("/updateUser/:id", Controller.UpdateUser);
router.delete("/deleteUser/:id", Controller.DeleteUser);

module.exports = router;
