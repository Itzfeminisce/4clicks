const controller = {
    index: (req, res) => {
        const strings = req.strings;
        return res.render("groups", { title: strings.page.title[req.url], APPNAME: strings.app_name });
    }
};



module.exports = controller;