const UserController = require("../controllers/user.controller");
const authenticate = require("../config/auth");

module.exports = function(app) {
    //USER
    app.post("/api/register",UserController.Register);
    app.post("/api/login",UserController.Login);
    app.post("/api/logout",UserController.Logout);
    app.get("/api/user/:id",authenticate,UserController.getUser);
}