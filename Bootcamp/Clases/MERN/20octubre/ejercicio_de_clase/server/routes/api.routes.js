const { addUser, getUserId, putNewInfo, deleteUser } = require("../controllers/api.controllers");



module.exports = (app)=>{
    app.post('/api/user',addUser);
    app.get('/api/user/:id',getUserId);
    app.put('/api/put',putNewInfo);
    app.delete('/api/deleteuser/:id',deleteUser);
}