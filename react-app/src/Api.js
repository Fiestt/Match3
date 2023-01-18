class Api {
    constructor(t) {
        this.path = "http://localhost:5000/api";
        this.token = t;
    }


    // Player registation

    regPlayer(body) {
        return fetch(`${this.path}/player/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
    }

    // Player authorization

    authPlayer(body) {
        return fetch(`${this.path}/player/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
    }

    // Get one player

    getOnePlayer(id) {
        return fetch(`${this.path}/player/${id}`, {
            method: "GET",
            headers: {
            }
        })
    }

    // Get all players

    getPlayers() {
        return fetch(`${this.path}/players`, {
            method: "GET",
            headers: {
            }
        })
    }

    updPlayer(body) {
        return fetch(`${this.path}/player`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
    }

}


export default Api;