import * as next from 'next'
import routes from "./routes";
import { Request, Response } from 'express';
const express = require("express");
 
const dev = process.env.NODE_ENV !== 'production'
const port = dev?parseInt(process.env.PORT || '3000', 10):80
const app = next({ dev })
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
    const server = express();


    server.get("/api/:version/:module/:endpont",(req:Request, res:Response)=>{
        res.end("Estás buscando: " + req.params.endpont + " con query prueba: " + req.query.prueba);
    });

    server.use(handler).listen(port);
})
