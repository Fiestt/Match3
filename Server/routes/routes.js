const Router = require('express');
const router = new Router();
const requests = require("../Requests/Requests.js")
const jwt = require('jsonwebtoken')



function AuthCheck (req, res, next) {
    const authHeader = req.headers['authorization']
    console.log(authHeader)
    const headerToken = authHeader && authHeader.split(' ')[1] 
    jwt.verify(headerToken, process.env.SECRET_KEY, (err, data) => {
        if (err) return res.status(400).json({error: "Invalid token"})
        next() 
    })
   
}

// router.post("/player",  requests.createPlayer )
router.get("/player", AuthCheck, requests.getPlayers )
router.get("/player/:id", requests.getOnePlayer )
router.put("/player", requests.updPlayer )
router.delete("/player/:id", requests.deletePlayer )

router.post("/player/register", requests.regPlayer )
router.post("/player/auth", requests.authPlayer )

module.exports = router