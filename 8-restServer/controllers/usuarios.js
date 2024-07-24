const { response } = require("express")

const usuariosGet = (req, res = response) => {
    const { q, nombre = "no name ", apikey, page = 1, limit = 5 } = req.query;

    res.json({
        msg: "get api - controlador",
        q,
        nombre,
        apikey
    })
}

const usuariosPut = (req, res = response) => {
    const { id } = req.params;
    
    res.json({
        msg: "put api - controlador",
        id
    });
}

const usuariosPost = (req, res = response) => {
    const {nombre, id} = req.body;

    res.json({
        msg: "post api - controlador",
        nombre,
        id
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "delete api - controlador"
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "patch api - controlador"
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}