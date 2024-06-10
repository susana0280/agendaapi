const  express=require("express")
const cors = require('cors');
const app=express()

app.use(express.json())
app.use(cors());



const mysql=require("mysql")
const myconn=require("express-myconnection")
const dbOptions={
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    database:"agenda"
}

const routes=require("./routes")

//middleware
app.use(myconn(mysql,dbOptions,"single"))



 
    app.use("/api",routes)





    const port=3001;
    app.listen(port,()=>{
        console.log(`Server running on port ${port}`)
    })
    