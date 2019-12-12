 const express = require ('express');

 const app = express();

 app.get ('/', (req,res) => {

    res.send('<h1>EXPRESS</h1>');
 })

app.post( '/new/user', (req, res) =>{

   res.json({
        name: "juan"
    });
})



 app.listen(3000, () =>{

    console.log("Corriendo en puerto 3000");
 })