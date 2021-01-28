
const db = require("../dbconnection");
const User = require("../../model/User");
const controller = {
    index: (req, res) => {
        const strings = req.strings;
        let y = User.init({db:db,req:req}).getUser();
        return res.render("home", { title: strings.page.title[req.url], APPNAME: strings.app_name,dailyGreeting:strings.views.dailyGreeting,username:req.params.username ,session:req.session.user});
    }
};



module.exports = controller;