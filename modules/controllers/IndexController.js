
const controller = {
    index: (req, res) => {
        const strings = req.strings;
        
        return res.render("index", { title: strings.page.title[req.url], APPNAME: strings.app_name,session:""});
    }
};



module.exports = controller;