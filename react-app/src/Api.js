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

    getPlayer(id) {
        return fetch(`${this.path}/player/:${id}`, {
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




    // getProducts() {
    //     return fetch(`${this.path}/products`, {
    //         headers: {
    //             "Authorization": `Bearer ${this.token}`
    //         }
    //     })
    // }
    // getProduct(id) {
    //     return fetch(`${this.path}/products/${id}`, {
    //         headers: {
    //             "Authorization": `Bearer ${this.token}`
    //         }
    //     })
    // }
    // addProduct(body) {
    //     return fetch(`${this.path}/products/`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${this.token}`
    //         },
    //         body: JSON.stringify(body)
    //     })
    // }
    // updProduct(id, body) {
    //     return fetch(`${this.path}/products/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${this.token}`
    //         },
    //         body: JSON.stringify(body)
    //     })
    // }
    // delProduct() {

    // }
    // logIn(body) { // войти
    //     return fetch(`${this.path}/signin`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(body)
    //     })
    // }
    // signUp() { 

    // }
    // showProfile() {
    //     return fetch(`${this.path}/users/me`, {
    //         headers: {
    //             "Authorization": `Bearer ${this.token}`
    //         }
    //     })
    // }
    // setLike(id, flag) {
    //     return  fetch(`${this.path}/products/likes/${id}`, {
    //         method: flag ? "PUT" : "DELETE",
    //         headers: {
    //             "Authorization": `Bearer ${this.token}`
    //         }
    //     })
    // }
}


export default Api;