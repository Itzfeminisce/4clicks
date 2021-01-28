module.exports = {

    app_name: "4Clicks",
    views: {
        dailyGreeting: "How do you feel today, Rotimi?"
    },
    buttons: {
        login: "Login",
        register: "Register",
        continue: "Continue"
    },

    page: {
        title: {
            "/": "4Clicks - log in  or sign up",
            "/home": "Home",
            "/password": "Password",
            "/password/recover": "Recover your password",
            "/register": "Register an account",
            "/market": "Purchase Databundle, TV Subscription, Recharge and more...",
            "/market/data": "Purchase Databundle in just 4Clicks",
            "/market/recharge": "Print recharge cards in just 4Clicks",
            "/market/electricity": "Pay electricity bills in just 4Clicks",
            "/market/airtime": "Purchase airtime in just 4Clicks",
            "/market/tv": "Pay TV Subscriptions in just 4Clicks",

            // MENU TITLES
            "/market/overview": "Overview",
            "/market/transactions": "Transactions",
            "/market/settings": "Settings",
            "/market/networks": "Networks",
            "/market/about": "About us",
            // \MENU TITLES


            "/groups": "Get updates and meet new Friends here...",
            "/settings": "Manage setting",
        },
        market: {
            data: {
                strings: {
                    name: "data",
                    label: "Buy Databundle in just 4clicks!",
                    menu: {
                        overviewDefaultDescription: "Transactions made within the last one month shows up here if we found any.",
                        transactionsDefaultDescription: "Transaction history shows up here.",
                        networksDefaultDescription: "Yout networks and connections are gathered here.",
                        settingsDefaultDescription: "Manage all settings.",
                        aboutDefaultDescription: "There is more to achieve. <br>The more you learn, The more you know."
                    }
                }
            },
            airtime: {
                strings: {
                    name: "airtime",
                    label: "Buy airtime in just 4clicks!"
                }
            },
            tv: {
                strings: {
                    name: "tv subscription",
                    label: "Buy tv subscription in just 4clicks!"
                }
            },
            electricity: {
                strings: {
                    name: "electricity",
                    label: "Buy electricity in just 4clicks!"
                }
            },
            recharge: {
                strings: {
                    name: "recharge",
                    label: "Buy recharge cards in just 4clicks!"
                }
            },
            services: {
                strings: {
                    name: "more",
                    label: "learn more!"
                }
            },
        }

    }
};