const {
    strings,
    colors,
    styles,
    modules
} = require("./res/resources");
const {
    HomeController,
    IndexController,
    MarketController,
    GroupsController,
    UserController,
    SettingsController,
    ProfileController,
    PhotoController,
} = require("./modules/controllers");

const express = modules.express,
    path = modules.path,
    bodyParser = modules.bodyParser,
    fs = modules.fs;

const session = require("express-session");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
// const user = require("./modules/User");


// Set port
const PORT = process.env.PORT || 3000;

// init express for routing
let app = express();

// set env to production
// app.set("env", "production");

// session hadler
app.set("trust proxy", 1);

// app.use(morgan("dev"));



app.set("view engine", "ejs");
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    req.strings = strings;
    next();
})

app.use(session({
    secret: "some-secret-key",
    name: "uid_id",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 600000,
        httpOnly: true,
        secure: ((process.env.PORT === "production" ? true : false))
    }
}));



let isSessionSet = function (req, res, next) {
    if (req.session.user) {
        return res.redirect(`/home`);
    } else{
         next();
    }
}


// optional routes
app.get("/", isSessionSet, IndexController.index);
app.get("/password", UserController.password.index);
// loading Pages {Overview && Basic_info only}
app.get("/getView", function (req, res) {
    fs.readFile(`./views/p/${req.query.view}.ejs`, { encoding: "utf8" }, (err, view) => {
        if (err) {
            return console.log(err);
        }
        res.json(view);
    })
});


/**
 * All post request goes here
 * 
 */

app.post("/handleRegisterAuthentication", UserController.register);
app.post("/handleLoginAuthentication", UserController.login);


// authenticate user before reaching this routes
app.use((req,res,next)=>{
     if(!(req.session.user)){
     res.redirect("/");
    }else{
        next();
    }
    return;
})
app.get("/settings", SettingsController.index);
app.get("/groups", GroupsController.index);
app.get("/photo", PhotoController.index);
app.get("/home", HomeController.index);
app.get("/p/posts", ProfileController.views.posts);
app.get("/p/about", ProfileController.views.about);
app.get("/p/overview", ProfileController.views.overview);
app.get("/p/basic_info", ProfileController.views.basic_info);
app.get("/p/friends", ProfileController.views.friends);
app.get("/p/withdraw", ProfileController.views.withdraw);
app.get("/p/deposit", ProfileController.views.deposit);
app.get("/p/transactions", ProfileController.views.transactions);

app.get("/p/photos", ProfileController.views.photos);

app.get("/p/friends", ProfileController.views.friends);
app.get("/p/active_friends", ProfileController.views.active_friends);
app.get("/p/request_friends", ProfileController.views.request_friends);
app.get("/p/referral_link", ProfileController.views.referral_link);
app.get("/p/referrals", ProfileController.views.referrals);
app.get("/p/deactivate_account", ProfileController.views.deactivate_account);
app.get("/p/:name?", ProfileController.index);

app.get("/market", MarketController.index);
app.get("/market/data", MarketController.views.data);
app.get("/market/overview", MarketController.views.overview);
app.get("/market/transactions", MarketController.views.transactions);
app.get("/market/networks", MarketController.views.networks);
app.get("/market/settings", MarketController.views.settings);
app.get("/market/about", MarketController.views.about);
app.get("/market/recharge", MarketController.views.recharge);
app.get("/market/airtime", MarketController.views.airtime);
app.get("/market/tv", MarketController.views.tv);

// Recharge API
app.get("/market/electricity", MarketController.views.electricity);

// Recharge API
app.get("/market/services", MarketController.views.services);


// Handle post creation
app.post("/postCreate",PhotoController.create);



// Get 404 requests and send response
app.use("*", (req, res, next) => {
    res.status(404).render("404", { msg: "404 Page Not Found." });
});

app.listen(PORT, () => {
    console.log(`listening on poort 3000`);
});
