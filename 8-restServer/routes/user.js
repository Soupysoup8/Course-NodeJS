const { Router } = require("express");
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require("../controllers/usuarios");

const router = Router();

router.get("/", usuariosGet );
// actgualiza
router.put("/:id", usuariosPut);
// agrega
router.post("/", usuariosPost);
// borra 
router.delete("/", usuariosDelete);

router.patch("/", usuariosPatch);

module.exports = router;