const express = require("express");

const app = express();

app.use(logger);
app.use(checkPermission);

app.get("/books", (req,res) => {
    return res.send({ route: "/books"})
});


app.get("/libraries", (req,res) => {
    return res.send({ route: "/libraries", permission: true})
});

app.get("/authors", (req,res) => {
    return res.send({ route: "/authors", permission: true})
});


function logger(req, res, next) {
    console.log("this is books");
    next();
}

function checkPermission(req, res, next) {
   if(req.path === "/libraries") {
       console.log("i am librians")
   } 
   else if (req.path === "/authors") {
       console.log("i am authors")
   }
   next();
    
}


app.listen(8000, () => {
    console.log("listining on port 8000");
})