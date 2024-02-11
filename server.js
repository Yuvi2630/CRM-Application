require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const pg = require('pg');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'pug');

const PORT = process.env.PORT || 8080; 



// <========================================================= select query
var connection = new pg.Client({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

function Select() {
    return 'SELECT * FROM public."Mytable" order by id';
}
var results_select
connection.connect((err)=>{                               
    if(!err){
            console.log("Connected");
            const query = Select();
            connection.query(query,(err,results)=>{
            if(!err){
                results_select = results;
                console.log("successfully fetched");
            }
            else{
                console.log("error in query");
            }
            });
        }
    });


// <========================================================= insert query

function insert(name,email,phonenumber){
    var  name = name
    var  email = email;
    var phonenumber = phonenumber;
    var space = " ";
    var comma =","
    var parenthesis = "(";
    var parenthesis2 = ")";
    var inverted = "'";
    var final_string = 'Insert INTO  "Mytable" (name, email, phonenumber) VALUES' + space + parenthesis + inverted + name  + inverted  + comma + inverted + email + inverted  + comma + inverted + phonenumber + inverted + parenthesis2;
    console.log(final_string);
    return final_string;


}
function insert_function(query){
    var connection_1 = new pg.Client({
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
  
    connection_1.connect((err)=>{                               
        if(!err){
            console.log("Connected");
            console.log(query);
            connection_1.query(query,(err,results)=>{
                if(!err){
                    console.log(results);
                    console.log("successfully fetched");
                }
                else{
                    console.log("error in query");
                    console.log(err);
                }
            });
            }
        });
}
// <========================================================= delete query



        function del (){
            return 'DELETE FROM public."Mytable" WHERE id = 2';
        }
        function delete_function(query){
            var connection_2 = new pg.Client({
                port: process.env.DB_PORT,
                host: process.env.DB_HOST,
                user: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME
            });
        connection_2.connect((err)=>{                               
            if(!err){
                  console.log("Connected");
                  const query = del();
                  console.log(query);
                  connection_2.query(query,(err,results)=>{
                    if(!err){
                        console.log(results);
                        console.log("successfully fetched");
                    }
                    else{
                        console.log("error in query");
                    }
                  });
                }
            });

        }
// <========================================================= update query




        function update(){
            return 'UPDATE public."Mytable" SET name= \'abc\' WHERE id=26';
        }
        function update_function(query){
            var connection_3 = new pg.Client({
                port: process.env.DB_PORT,
                host: process.env.DB_HOST,
                user: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME
            });
        connection_3.connect((err)=>{                               
            if(!err){
                  console.log("Connected");
                  const query = update();
                  console.log(query);
                  connection_3.query(query,(err,results)=>{
                    if(!err){
                        console.log(results);
                        console.log("successfully fetched");
                    }
                    else{
                        console.log("error in query");
                        console.log(err);
                    }
                  });
                }
            });
        }
// <========================================================= 
app.get("/", (req, res) => {
    const indexPath = path.join(__dirname, "frontend", "index.pug");

    res.render(indexPath,{results_select:results_select});
    
});

app.listen(PORT, () => {
    console.log(`Node server is running on http://localhost:${PORT}`);
});



app.post('/add_user', (req,res) => {
const searchQuery = req.body;
if (!searchQuery) {
    res.redirect(302, '/');
    return;
}

console.log(searchQuery);
var Insert = insert(req.body.name, req.body.email, req.body.phonenumber);
insert_function(Insert);

    res.send('user added');
  
});