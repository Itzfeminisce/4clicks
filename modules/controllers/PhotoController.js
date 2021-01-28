const controller = {
    index: (req, res) => {
        const strings = req.strings;
        return res.render("photo", { title: `${strings.app_name}`, APPNAME: strings.app_name,dailyGreeting:strings.views.dailyGreeting });
    },
    create:(req,res,next)=>{
        res.json(req.body.content);
    }
};



module.exports = controller;