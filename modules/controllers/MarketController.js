const controller = {
    index: (req, res) => {
        const strings = req.strings;
        return res.render("market", { title: strings.page.title[req.url], APPNAME: strings.app_name, market: strings.page.market,username:req.params.username });
    },
    views: {
        data: (req, res) => {
            const strings = req.strings;
            return res.render("./market/data", {pageid:"overview",description:strings.page.market.data.strings.menu.overviewDefaultDescription,title: strings.page.title[req.url], APPNAME: strings.app_name, market: strings.page.market });
        },
        overview: (req, res) => {
            const strings = req.strings;
            return res.render("./market/data", { pageid:"overview",description:strings.page.market.data.strings.menu.overviewDefaultDescription,title: strings.page.title[req.url], APPNAME: strings.app_name, market: strings.page.market });
        },
        transactions: (req, res) => {
            const strings = req.strings;
            return res.render("./market/data", { pageid:"transactions",description:strings.page.market.data.strings.menu.transactionsDefaultDescription,title: strings.page.title[req.url], APPNAME: strings.app_name, market: strings.page.market });
        },
        networks: (req, res) => {
            const strings = req.strings;
            return res.render("./market/data", { pageid:"networks",description:strings.page.market.data.strings.menu.networksDefaultDescription,title: strings.page.title[req.url], APPNAME: strings.app_name, market: strings.page.market });
        },
        settings: (req, res) => {
            const strings = req.strings;
            return res.render("./market/data", { pageid:"settings",description:strings.page.market.data.strings.menu.settingsDefaultDescription,title: strings.page.title[req.url], APPNAME: strings.app_name, market: strings.page.market });
        },
        about: (req, res) => {
            const strings = req.strings;
            return res.render("./market/data", { pageid:"about",description:strings.page.market.data.strings.menu.aboutDefaultDescription,title: strings.page.title[req.url], APPNAME: strings.app_name, market: strings.page.market });
        },

        // Recharge API
        recharge: (req, res) => {
            const strings = req.strings;
            return res.render("./market/recharge", {pageid:"overview",description:strings.page.market.data.strings.menu.overviewDefaultDescription,title: strings.page.title[req.url], APPNAME: strings.app_name, market: strings.page.market });
        },
        // Recharge API
        airtime: (req, res) => {
            const strings = req.strings;
            return res.render("./market/airtime", {pageid:"overview",description:strings.page.market.data.strings.menu.overviewDefaultDescription,title: strings.page.title[req.url], APPNAME: strings.app_name, market: strings.page.market });
        },
        // Recharge API
        electricity: (req, res) => {
            const strings = req.strings;
            return res.render("./market/electricity", {pageid:"overview",description:strings.page.market.data.strings.menu.overviewDefaultDescription,title: strings.page.title[req.url], APPNAME: strings.app_name, market: strings.page.market });
        },
        tv: (req, res) => {
            const strings = req.strings;
            return res.render("./market/tv", {pageid:"overview",description:strings.page.market.data.strings.menu.overviewDefaultDescription,title: strings.page.title[req.url], APPNAME: strings.app_name, market: strings.page.market });
        },
        services: (req, res) => {
            const strings = req.strings;
            return res.render("./market/services", {pageid:"overview",description:strings.page.market.data.strings.menu.overviewDefaultDescription,title: strings.page.title[req.url], APPNAME: strings.app_name, market: strings.page.market });
        },
    }
};



module.exports = controller;