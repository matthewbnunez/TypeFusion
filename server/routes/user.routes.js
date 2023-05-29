const UserController = require('../controllers/user.controller');
const {authenticate} = require("../config/jwt.config")

module.exports = function(app){
    app.get('/api', UserController.index);
    app.get("/api/user", authenticate, UserController.findAllUser)
    app.post("/api/user", UserController.createUser)
    app.get("/api/user/cookie", UserController.cookie)
    app.post("/api/user/login", UserController.login)
    app.get("/api/user/logout", UserController.logout)
    app.get("/api/user/:id", UserController.getUser)
    app.put("/api/user/:id", UserController.updateUser)
    app.delete("/api/user/:id", UserController.deleteUser)

}
