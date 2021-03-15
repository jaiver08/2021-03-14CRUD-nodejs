module.exports = (app) => {
    const user = require('../controllers/UsersController')

    app.post('/user/create',user.create)
    app.get('/user/all',user.getAll)
    app.get('/user/:id',user.getId)
    app.put('/user/update/:id',user.update)
    app.delete('/user/delete/:id',user.delete)
}