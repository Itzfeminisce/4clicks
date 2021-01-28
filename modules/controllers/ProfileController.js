
const controller = {
    index: (req, res) => {
        const strings = req.strings;
        return res.render("profile", {posts:"./p/posts",title: `${strings.app_name} - ${req.session.user.FirstName}`, APPNAME: strings.app_name,dailyGreeting:strings.views.dailyGreeting,session:req.session.user,
    });
    },
    views:{
        posts: (req, res) => {
            const strings = req.strings;
            return res.render("profile", {posts:"./p/posts",title: `${strings.app_name} ${req.params.username}`, APPNAME: strings.app_name,dailyGreeting:strings.views.dailyGreeting,username:req.params.username });
        },
        about: (req, res) => {
            const strings = req.strings;
            return res.render("profile", {posts:"./p/about",about_page:"./overview",title: `${strings.app_name} ${req.params.username}`, APPNAME: strings.app_name,dailyGreeting:strings.views.dailyGreeting,username:req.params.username });
        },
        overview: (req, res) => {
            const strings = req.strings;
            return res.render("profile", {posts:"./p/about",about_page:"./overview",title: `${strings.app_name} ${req.params.username}`, APPNAME: strings.app_name,dailyGreeting:strings.views.dailyGreeting,username:req.params.username });
        },
        basic_info: (req, res) => {
            const strings = req.strings;
            return res.render("profile", {posts:"./p/about",about_page:"./basic_info",title: `${strings.app_name} ${req.params.username}`, APPNAME: strings.app_name,dailyGreeting:strings.views.dailyGreeting,username:req.params.username });
        },
        friends: (req, res) => {
            const strings = req.strings;
            return res.render("profile", {posts:"./p/friends",title: `${strings.app_name} ${req.params.username}`, APPNAME: strings.app_name,dailyGreeting:strings.views.dailyGreeting,username:req.params.username });
        },
        withdraw: (req, res) => {
            const strings = req.strings;
            return res.render("profile", {posts:"./p/withdraw",title: `${strings.app_name} ${req.params.username}`, APPNAME: strings.app_name,dailyGreeting:strings.views.dailyGreeting,username:req.params.username });
        },
        deposit: (req, res) => {
            const strings = req.strings;
            return res.render("profile", {posts:"./p/deposit",title: `${strings.app_name} ${req.params.username}`, APPNAME: strings.app_name,dailyGreeting:strings.views.dailyGreeting,username:req.params.username });
        },
        transactions: (req, res) => {
            const strings = req.strings;
            return res.render("profile", {posts:"./p/transactions",title: `${strings.app_name} ${req.params.username}`, APPNAME: strings.app_name,dailyGreeting:strings.views.dailyGreeting,username:req.params.username });
        },
        photos: (req, res) => {
            const strings = req.strings;
            return res.render("profile", {posts:"./p/photos",title: `${strings.app_name} ${req.params.username}`, APPNAME: strings.app_name,dailyGreeting:strings.views.dailyGreeting,username:req.params.username });
        },
        friends: (req, res) => {
            const strings = req.strings;
            return res.render("profile", {posts:"./p/friends",title: `${strings.app_name} ${req.params.username}`, APPNAME: strings.app_name,dailyGreeting:strings.views.dailyGreeting,username:req.params.username });
        },
        active_friends: (req, res) => {
            const strings = req.strings;
            return res.render("profile", {posts:"./p/active_friends",title: `${strings.app_name} ${req.params.username}`, APPNAME: strings.app_name,dailyGreeting:strings.views.dailyGreeting,username:req.params.username });
        },
        request_friends: (req, res) => {
            const strings = req.strings;
            return res.render("profile", {posts:"./p/request_friends",title: `${strings.app_name} ${req.params.username}`, APPNAME: strings.app_name,dailyGreeting:strings.views.dailyGreeting,username:req.params.username });
        },
        referral_link: (req, res) => {
            const strings = req.strings;
            return res.render("profile", {posts:"./p/referral_link",title: `${strings.app_name} ${req.params.username}`, APPNAME: strings.app_name,dailyGreeting:strings.views.dailyGreeting,username:req.params.username });
        },
        referrals: (req, res) => {
            const strings = req.strings;
            return res.render("profile", {posts:"./p/referrals",title: `${strings.app_name} ${req.params.username}`, APPNAME: strings.app_name,dailyGreeting:strings.views.dailyGreeting,username:req.params.username });
        },
        deactivate_account: (req, res) => {
            const strings = req.strings;
            return res.render("profile", {posts:"./p/deactivate_account",title: `${strings.app_name} ${req.params.username}`, APPNAME: strings.app_name,dailyGreeting:strings.views.dailyGreeting,username:req.params.username });
        },
    }
};



module.exports = controller;