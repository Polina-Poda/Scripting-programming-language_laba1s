
const express = require("express");
const app = express();
a = "<h2>Hello Word</h2>";
app.get("/", (request, response) => {    
    response.send(a);
});
app.listen(3000);

