import express from "express";
import cors from "cors";
import session from "express-session";
import sequelizeStore from "connect-session-sequelize";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import authRoute from "./routes/authRoute.js";
import db from "./config/database.js";

dotenv.config();
const app = express();

// (async() =>{
//      await db.sync();
//     })();
const sessionStore = sequelizeStore(session.Store);

const Store = new sessionStore({
    db: db
});

app.use(session({
    secret:process.env.SESS_SECRET, 
    resave: false,
    saveUninitialized: true,
    store: Store,
    cookie: {
        secure :'auto'
    }
}));

app.use(cors(
    {
        credentials: true,
        origin: "https://frontend-pemweb.vercel.app/"
    }
));
app.use(express.json());
app.use(userRoute);
app.use(productRoute);
app.use(authRoute);

// Store.sync();

app.listen(process.env.APP_PORT, () => {
    console.log(`Server running on port 5000 `);
});
