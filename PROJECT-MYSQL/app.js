const express =require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv/config");
const app = express();

app.use(cors());
app.options("*",cors());
app.use(express.json());

const connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "admin@123",
    database: "node_5",
    port: 3309,
});

app.get("/get",(req,res)=>{
    connection.query("SELECT * FROM users",function (err,rows) {
        if(err) {
            res.json({ error: err});
        }
        else{
            res.json({Data: rows});
        }
    });
});

app.post("/insert", (req,res)=>{
    let { name, email, position } =req.body;
    let errors = false;

    if(name.length === 0 || email.length === 0 || position === 0){
        errors = true;
        res.json("error","please enter name and email and position");
    }

    if(!errors) {
        var form_data ={
            name: name,
            email: email,
            position: position,
        };

        connection.query("insert into users SET ?", form_data, (err,result) =>{
            if (err) {
                res.json({ error: err});
            }
            else{
                res.json({ success: "User successfully added"});
            }
        });
    }
})

app.put("/update/:id", function (req, res){
    let id = req.params.id;
    let { name, email, position} = req.body;
    let errors = false;

    if(name.length ===0 || email.length === 0 || position === 0){
        errors = true;
        res.json("error","please enter name and email and position");
    }
    if(!errors){
        var form_data ={
            name: name,
            email: email,
            position: position
        };
        connection.query( "UPDATE Users SET ? WHERE id =" + id,
        form_data, 
        function (err, result){
            if(err){
                res.json({error: err});
            }
            else{
                res.json({ success: "User successfuly updated"});
            }
        });
    }
})


app.delete("/delete/:id", (req,res) => {
    let id = req.params.id;
    let errors=false;
    if(!errors)
    {
        
        connection.query("delete from users where id = " + id, (err,result) => {
            if(err)
            {
                res.json({error : err});
            }
            else
            {
                res.json({success: "user deleted"});
            }
        });
    }
});



connection.connect(function (error){
    if(error){
        console.log(error);
    }
    else {
        console.log("Database Connected Successfully..!!");
    }
});

const port = process.env.port;
app.listen(port, () =>{
    console.log(`server is running http://localhost:${port}`);
});


