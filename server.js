import express from "express";
import bodyParse from "body-parser";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import appRoutes from './server/routes/applicantRoutes';
import memberRoutes from './server/routes/memberRoutes';
import partenerRoutes from './server/routes/partenerRoutes';

dotenv.config({path:'./.env'});

const app = express();

app.use(cors());
app.use(bodyParse.json());

app.use('/awep/api/v1',appRoutes);
app.use('/awep/api/v1',memberRoutes);
app.use('/awep/api/v1',partenerRoutes);

app.use('/',(req,res)=>{
    res.status(404).send({
        statu:404,
        message:"this route does not exist"
    })
})

const databaseUrl= process.env.DATABASE;
mongoose.connect(databaseUrl,{useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology:true, useFindAndModify:false}).then(()=>console.log("db connected succefully"))

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);

})

export default app;