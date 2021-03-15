const Users = require('../models/Users')

exports.create = (req, res) => {
    const nUser = new Users({
        code: req.body.code,
        userName: req.body.userName,
        userEmail: req.body.userEmail
    })

    nUser.save().then(
        data => {
            res.send(data)
        }
    ).catch(
        err => {
            res.status(500).send({
                message: err.message || 'Error al crear el usuario'
            })
        }
    )
}

exports.getAll = (req, res) => {
    Users.find({}).then(
        data => {
            res.send(data)
        }
    ).catch(
        err => {
            res.status(500).send({
                message: err.message || 'Error al obtener los usuario'
            })
        }
    )
}

exports.getId = (req, res) => {
    const id = req.params.id
    Users.find({'_id': id}).then(
        data => {
            if(!data){
                res.status(404).send({message: "No se encontro al usuario con el id: "+ id})
            }else{
                res.send(data)
            }
        }
    ).catch(
        err => {
            res.status(500).send({
                message: 'Error en el servidor'
            })
        }
    )
}

exports.update = (req, res) => {
    const id = req.params.id

    if(!req.body){
        return res.status(400).send({message: "El cuerpo de la peticion no puede ir vacio"})
    }

    Users.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(
            (data) => {
                if(!data){
                    res.status(404).send({message: "No se puede editar un usuario inexistente"})
                }else{
                    res.send({message: "El usuario se ha modificado"})
                }
            }
        )
        .catch(
            (err) => {
                res.status(500).send({message: "Hubo un problema en el servidor"})
            }
        )
}

exports.delete = (req, res) => {
    const id = req.params.id

    Users.findOneAndRemove(id)
        .then(
            (data) => {
                if(!data){
                    res.status(404).send({message: "No se puede eliminar el documento porque no se encontro"})
                }else{
                    res.send({message: "Se elimino el documento exitosamente"})
                }
            }
        )
        .catch(
            (err) => {
                res.status(500).send({message: "Hubo un error en el servidor"})
            }
        )
}