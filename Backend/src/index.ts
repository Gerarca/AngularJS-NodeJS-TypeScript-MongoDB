import app from "./app";
import { startConnection } from "./database";

async function  main(){

    //Connection to database
    startConnection();

    await app.listen(app.get('port'), ()=>{
        console.log("Server on Port: ", app.get('port') )
    })
}

main();