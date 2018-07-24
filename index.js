var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var defaultCtrl = require('./controllers/default.ctrl');
var productsCtrl = require('./controllers/products.ctrl');
var defaultRouter = require('./routes/default.router');
var productsRouter = require('./routes/products.router');
app.listen(3000, function(){
    console.log("server is running");
});


app.use(bodyParser.json());


app.use('/', defaultRouter);
app.use('/api/products', productsRouter);





// var http = require("http");
// var fs = require("fs");

// function handle(req, res){
//     switch (req.url){
//         case "/":
//             var contents = fs.readFileSync("index.html");
//             res.write(contents);
//             res.end();
//             break;
//         case "/products":
//             var products = [{id:1, name:"books", price:100},
//             {id:2, name:"toys", price:200},
//             {id:3, name:"gift cases", price:300}];

//             res.write(JSON.stringify(products));
//             res.end();
//             break;

//         default:
//             res.write("Welcome to products");
//             res.end();
//             break;

//     }
// }

// var server = http.createServer(handle);
// server.listen(3000, function(){
//     console.log("server is running");
// })