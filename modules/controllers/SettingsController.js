const controller = {
    index: (req, res) => {
        const strings = req.strings;
        return res.render("settings", { title: strings.page.title[req.url], APPNAME: strings.app_name });
    }
};



module.exports = controller;