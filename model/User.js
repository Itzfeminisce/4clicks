// const db = require("../modules/dbconnection");

class User {
    constructor({db, req} = {}){
        this.id = req.session.user.id;
        this.db = db;
        this.data = [];
    }
    /**
     * 
     * @param {object} arg 
     * @returns new Instance of User class
     */
    static init(arg){
        let user = new User(arg);
        let p = user.db.query(`select * from basic where id = ${user.id}`);
        p.then(e=>{
            e.map(u=>{
                user.data.push(u);
            })
        });
        return user;
    }
    getUser(){
        return this.data.map(e=>{
            return e;
        });
    }
}
module.exports = User;