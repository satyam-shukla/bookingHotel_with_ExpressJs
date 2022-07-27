const express = require("express"); 
const app = express();
const db = require("./db/db");
const cookieParser = require("cookie-parser")

const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const hotelsRoute = require("./routes/hotels");
const roomsRoute = require("./routes/rooms");

app.use(express.json())
app.use(cookieParser())


app.use("/api/auth/",authRoute);
app.use("/api/users/",usersRoute);
app.use("/api/hotels/",hotelsRoute);
app.use("/api/rooms/",roomsRoute);



const connect = async()=>{
    try {  
        await db.connectToServer()
        console.log("DATABASE IS CONNECTED")
    } catch (err) {
        console.log("DATABASE IS NOT CONNECTED")
        throw err
    }
}

app.listen(8800,async()=>{
    await connect()
    console.log("Congrats your backend is running")
})


