const Router = require('express');
const router = new Router();
const requests = require("../Requests/Requests.js")
const jwt = require('jsonwebtoken')

// router.post("/player",  requests.createPlayer )
router.get("/players", requests.getPlayers)
router.get("/player/:id", requests.getOnePlayer)
router.put("/player", requests.updPlayer)
router.delete("/player/:id", requests.deletePlayer)

router.post("/player/register", requests.regPlayer)
router.post("/player/auth", requests.authPlayer)

module.exports = router