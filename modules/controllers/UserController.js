const Joi = require("joi");
// const session = require("express-session");
// const morgan = require("morgan");
const db = require("../dbconnection");
const bcrypt = require("bcrypt");
const UserPasswordSalt = 10;


const controller = {
    index: (req, res) => {
        const strings = req.strings;
        return res.render("register", { title: strings.page.title[req.url], APPNAME: strings.app_name });
    },
    login(req, res) {
        let body = req.body, response = [];
        const schema = Joi.object({
            username: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            password: Joi.string().alphanum().min(5).required()
        });

        schema.validateAsync(body).then(data => {
            db.query(`select * from basic where Email='${data.username}'`).then(([user]) => {
                if (user) {
                    if (bcrypt.compareSync(data.password, user.Password)) {
                        // create user session
                        if (!req.session.user) {
                            req.session.user = user;
                        }
                        response.push({ hasErr: false, to: `/home`, message: "Log in successful", firstName: user.FirstName });
                    } else {
                        response.push({ hasErr: true, f: "___feedback", message: "Invalid username or password" });
                    }
                    
                     return res.json(response);

                } else {
                    return res.status(500).json([{ hasErr: true, f: "___feedback", message: "Invalid username." }]);
                }
            }, e => console.log(e));
        }, ({ details }) => {
            details.map(e => {
                response.push({ hasErr: true, f: e.context.key, message: e.message });
            });
            res.json(response)
        });
return;
    },
    register: (req, res) => {
        let body = req.body, r = [];
        const schema = Joi.object({
            firstName: Joi.string().alphanum().required(),
            lastName: Joi.string().alphanum().required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            password: Joi.string().alphanum().required().min(5).max(12),
            confirmPassword: Joi.ref('password'),
            gender: Joi.optional()
        });
        try {
            const response = [];
            schema.validateAsync(body).then(
                (data) => {
                    // database works
                    db.dbCreate("fc", { charset: "utf8" });
                    db.tableCreate('basic',
                        [
                            {
                                name: 'id',
                                type: 'int(11)',
                                primary: true,
                                inc: true,
                            },
                            {
                                name: 'FirstName',
                                type: 'varchar(64)',
                                index: true,
                                notnull: true
                            },
                            {
                                name: 'LastName',
                                type: 'varchar(64)',
                                index: true,
                                notnull: true
                            },
                            {
                                name: 'Email',
                                type: 'varchar(64)',
                                index: true,
                                notnull: true
                            },
                            {
                                name: 'Password',
                                type: 'varchar(200)',
                                notnull: true
                            },
                            {
                                name: 'Gender',
                                type: 'varchar(10)',
                                index: true,
                                notnull: true
                            },
                        ], {
                        charset: "utf8mb4",
                        engine: "InnoDB"
                    });
                    // check if email already exists
                    db.query(`select Email from basic where Email='${data.email}'`).then(result => {
                        if (result.length > 0) {
                            response.push({ hasErr: true, f: "email", message: "Email already exist." });
                            return res.json(response)
                        }
                        // Store user data to database
                        db.table("basic")
                            .insert({
                                FirstName: data.firstName,
                                LastName: data.lastName,
                                Email: data.email,
                                Password: (bcrypt.hashSync(data.password, UserPasswordSalt)),
                                Gender: data.gender,
                            }).then((userID) => {
                                response.push({ hasErr: false, message: "Registration successful", data: data, id: userID });
                                res.json(response)
                            }, err => {
                                response.push({ hasErr: true, message: err, data: data, id: null });
                                res.json(response)
                            });
                    }).catch(e => cosole.log(e));
                },
                ({ details }) => {
                    details.map(e => {
                        response.push({ hasErr: true, f: e.context.key, message: e.message });
                    });
                    res.json(response)
                });
        } catch (err) {
            res.json(err);
        }
    },
    password: {
        index: (req, res) => {
            const strings = req.strings;
            return res.render("password", { title: strings.page.title[req.url], APPNAME: strings.app_name });
        }
    }
};



module.exports = controller;