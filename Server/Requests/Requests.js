const db = require("../DB.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


class Requests {

    // CREATING A PLAYER

    // async createPlayer(req, res) {
    //     const { playername, surname } = req.body
    //     try {
    //         const newPlayer = await db.query('INSERT INTO layer (playername, surname) values ($1, $2) RETURNING *', [playername, surname])
    //         res.json(newPlayer.rows[0])
    //     } catch (err) {
    //         console.log(err);
    //         res.status(500).json({
    //             error: "Creating error",
    //         });
    //     };
    // }

    // GETTING ALL PLAYERS

    async getPlayers(req, res) {
        try {
           const player = await db.query('SELECT * FROM Player')
            res.json(player[0])
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: "Get all players error",
            });
        }
    }

    // GETTING ONE PLAYER

    async getOnePlayer(req, res) {
        const id = req.params.id
        try {
            const player = await db.query('SELECT * FROM Player WHERE id = ?', [id])
            res.json(player[0])
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: "Get one player error",
            });
        }
    }

    // UPDATING A PLAYER

    async updPlayer(req, res) {
        const { id, playername, surname } = req.body
        try {
            const player = await db.query('UPDATE player set playername = ?, surname = ? WHERE id = ? RETURNING *', [playername, surname, id])
            res.json(player[0])
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: "Updating error",
            });
        }
    }

    // DELETING A PLAYER

    async deletePlayer(req, res) {
        const id = req.params.id
        try {
            const player = await db.query('DELETE FROM player WHERE id = ?', [id])
            res.json(player[0])
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: "Deleting error",
            });
        }
    }

    // PLAYER REGISTRATION

    async regPlayer(req, res) {
        const { playername, surname, email, password } = req.body;
        try {
            const data = await db.query(`SELECT * FROM Player WHERE email=?`, [email])
            // res.json(data[0])
            const arr = data[0];
            if (arr.length !== 0) {
                res.status(400).json({ email: "This email already exists!" })
            } else {
                // res.json({res: "OK"})
                bcrypt.hash(password, 10, (err, hash) => {
                    if (err) {
                        res.status(err).json({ error: "Hashing error" })
                    }
                    const newPlayer = {
                        playername,
                        surname,
                        email,
                        password: hash
                    };
                    let flag = 1;
                    db.query(`INSERT INTO Player (playername, surname, email, password) VALUES (?, ?, ?, ?)`, [newPlayer.playername, newPlayer.surname, newPlayer.email, newPlayer.password], (err) => {
                        if (err) {
                            flag = 0;
                            res.status(500).json({
                                error: "Insert new player error"
                            })
                        } else {
                            flag = 1;
                            res.status(200).json({ message: "New player is added" })
                        }
                    })
                    if (flag) {
                        const token = jwt.sign({ email: newPlayer.email }, process.env.SECRET_KEY)
                        // console.log(token)
                    }
                });

            }

        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: "Registration error",
            });
        }
    }

    // PLAYER AUTHORIZATION

    async authPlayer(req, res) {
        const { email, password } = req.body;
        try {
            const data = await db.query(`SELECT * FROM Player WHERE email=?`, [email])
            // res.json(data[0])
            const players = data[0]
            if (players.length === 0) {
                res.status(400).json({ error: "Player does not exist" })
            } else {
                bcrypt.compare(password, players[0].password, (err, result) => {
                    if (err) {
                        res.status(400).json({ error: "Some error during comparison" })
                    } else if (result) {
                        const token = jwt.sign({ email: email }, process.env.SECRET_KEY)
                        let player = {
                            playername: players[0].playername,
                            email:  players[0].email,
                            surname: players[0].surname,
                            score: players[0].score,
                            id: players[0].id,
                        }
                        res.status(200).json({ message: "Player is authorized", player: player, token: token })
                    } else if (!result) {
                        res.status(400).json({ error: "Password is wrong!" })
                    }
                })
            }
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: "Authorization error!" })

        }
    }

}

module.exports = new Requests();

